import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './UserList.scss'
import {
   useReactTable,
   getCoreRowModel,
   getSortedRowModel,
   getPaginationRowModel,
   ColumnDef,
   SortingState,
   flexRender,
} from "@tanstack/react-table";
import UserlistSummary from '../components/UserlistSummary'
import { useUserContext } from '../utils/DataContext';
import { Users } from "../utils/types";
import ActionMenu from "../components/ActionMenu";
import FilterModal from "../components/FilterModal";
import sortIcon from "../assets/filter.png";
import arrowDown from "../assets/filter.png";
import arrowUp from "../assets/filter.png";
import Loading from "../components/Loading";

const UserList: React.FC = () => {
   const { users, loading, error, updateUserStatus } = useUserContext();
   const navigate = useNavigate();
   const [sorting, setSorting] = useState<SortingState>([]);
   const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

   const toggleFilterModal = () => setShowFilterModal(!showFilterModal);

   const getStatusStyle = (status: string): React.CSSProperties => {
      switch (status) {
         case "Active":
            return { fontSize: "0.7rem", color: "rgba(57, 205, 98)", fontWeight: "500", backgroundColor: "rgba(57, 205, 98, 0.06)", padding: "0.6rem 1.35rem", borderRadius: "0.75rem" };
         case "Blacklisted":
            return { fontSize: "0.7rem", color: "rgba(228, 3, 59)", fontWeight: "500", backgroundColor: "rgba(228, 3, 59, 0.1)", padding: "0.5rem", borderRadius: "0.75rem" };
         case "Inactive":
            return { fontSize: "0.7rem", color: "rgba(84, 95, 125)", fontWeight: "500", backgroundColor: "rgba(84, 95, 125, 0.06)", padding: "0.5rem 1rem", borderRadius: "0.75rem", fontStyle: 'italic' };
         default:
            return { fontSize: "0.7rem", color: "rgba(233, 178, 0)", fontWeight: "500", backgroundColor: "rgba(233, 178, 0, 0.1)", padding: "0.5rem 1rem", borderRadius: "0.75rem" };
      }
   };

   const formatDate = (dateString: string): string => {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
         month: "short",
         day: "2-digit",
         year: "numeric",
         hour: "numeric",
         minute: "2-digit",
         hour12: true,
      }).format(date);
   };

   const columns: ColumnDef<Users>[] = [
      // Column definitions here...
      {
         accessorKey: "organization",
         header: ({ column }) => (
            <div
               onClick={() => column.toggleSorting()}
               style={{ cursor: "pointer", display: 'flex', justifyContent: 'flex-start', gap: '1rem', alignItems: 'center' }}
            >
               <span>Organization</span>
               {column.getIsSorted() === "asc" && (
                  <img src={arrowUp} alt="Ascending" />
               )}
               {column.getIsSorted() === "desc" && (
                  <img src={arrowDown} alt="Descending" />
               )}
               {!column.getIsSorted() && <img src={sortIcon} alt="Unsorted" />}
            </div>
         ),
         cell: (info) => info.getValue() as string,
      },
      {
         accessorKey: "fullName",
         header: ({ column }) => (
            <div
               onClick={() => column.toggleSorting()}
               style={{ cursor: "pointer", display: 'flex', justifyContent: 'flex-start', gap: '1rem', alignItems: 'center' }}
            >
               <span>Full Name</span>
               {column.getIsSorted() === "asc" && (
                  <img src={arrowUp} alt="Ascending" />
               )}
               {column.getIsSorted() === "desc" && (
                  <img src={arrowDown} alt="Descending" />
               )}
               {!column.getIsSorted() && <img src={sortIcon} alt="Unsorted" />}
            </div>
         ),
         cell: (info) => (
            <div
               style={{ cursor: "pointer" }}
               onClick={() => navigate(`/user/${info.row.original.id}`)}
            >
               {info.getValue() as string}
            </div>
         ),
      },
      {
         accessorKey: "email",
         header: () => <span>Email</span>,
      },
      {
         accessorKey: "dateJoined",
         header: ({ column }) => (
            <div
               onClick={() => column.toggleSorting()}
               style={{ cursor: "pointer", display: 'flex', justifyContent: 'flex-start', gap: '1rem', alignItems: 'center' }}
            >
               <span>Date Joined</span>
               {column.getIsSorted() === "asc" && (
                  <img src={arrowUp} alt="Ascending" />
               )}
               {column.getIsSorted() === "desc" && (
                  <img src={arrowDown} alt="Descending" />
               )}
               {!column.getIsSorted() && <img src={sortIcon} alt="Unsorted" />}
            </div>
         ),
         cell: (info) => formatDate(info.getValue() as string),
      },
      {
         accessorKey: "phoneNumber",
         header: () => <span>Phone Number</span>,
         cell: (info) => <span>{info.getValue() as string}</span>,
      },
      {
         accessorKey: "status",
         header: () => <span>Status</span>,
         cell: (info) => (
            <span style={getStatusStyle(info.getValue() as string)}>
               {info.getValue() as string}
            </span>
         ),
      },
      {
         accessorFn: (row) => row.id,
         id: "action",
         header: () => <span> </span>,
         cell: (info) => <ActionMenu userId={info.row.original.id} />,
      },
   ];

   const table = useReactTable({
      data: users || [],
      columns,
      state: { sorting },
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      initialState: { pagination: { pageSize: 10, pageIndex: 0 } },
   });

   useEffect(() => {
      // fetchUsers();
      console.log('User table here......................: ', users);
   }, [users])


   function generatePaginationButtons(
      currentPage: number,
      totalPages: number,
      onPageChange: (page: number) => void
   ) {
      const buttons: (number | string)[] = [];
      const maxVisible = 3; // Max number of adjacent pages to display

      if (totalPages <= 5) {
         // Case 1: Total pages <= 5, show all pages
         for (let i = 1; i <= totalPages; i++) buttons.push(i);
      } else {
         // Always include the first page
         buttons.push(1);

         // Determine range of pages to display around the current page
         const startPage = Math.max(2, currentPage - 1);
         const endPage = Math.min(totalPages - 1, currentPage + 1);

         // Add ellipsis if the range does not connect to the first page
         if (startPage > 2) {
            buttons.push("...");
         }

         // Add pages in the range
         for (let i = startPage; i <= endPage; i++) {
            buttons.push(i);
         }

         // Add ellipsis if the range does not connect to the last page
         if (endPage < totalPages - 1) {
            buttons.push("...");
         }

         // Always include the last page
         buttons.push(totalPages);
      }

      // Generate button elements
      return buttons.map((btn, index) =>
         typeof btn === "number" ? (
            <button
               key={index}
               onClick={() => onPageChange(btn)}
               className={currentPage === btn ? "active" : ""}
            >
               {btn}
            </button>
         ) : (
            <span key={index} className="ellipsis">
               {btn}
            </span>
         )
      );
   }


   if (loading) return <Loading type='bars' color='#57b2c1' />

   if (error) return <p>Error: {error}</p>;
   

   return (
      <>
         <UserlistSummary />
         <div className="table-container">
            <button onClick={toggleFilterModal} className="filter-button">
               Filter <img src={arrowDown} alt="" />
            </button>
            <div className="user-list-table">
               {showFilterModal && <FilterModal toggleModal={toggleFilterModal} />}
               <table>
                  <thead>
                     {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                           {headerGroup.headers.map((header) => (
                              <th key={header.id}>
                                 {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                 )}
                              </th>
                           ))}
                        </tr>
                     ))}
                  </thead>
                  <tbody>
                     {table.getRowModel().rows.map((row) => (
                        <tr
                           key={row.id}
                           // onClick={() => navigate(`/user/${row.original.id}`)} // Navigate to `/user/:id`
                           style={{
                              cursor: "pointer",
                           }}
                        >
                           {row.getVisibleCells().map((cell) => {
                              // console.log(cell)
                              return (

                                 <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                 </td>
                              )
                           })}
                        </tr>
                     ))}
                  </tbody>
               </table>
               {/* Pagination Controls */}
            </div>
         </div>
         <div className="pagination-controls">
            <div className="left">
               <div></div>
               Showing{" "}
               <div className="select-container">

                  <select
                     value={table.getState().pagination.pageSize}
                     onChange={(e) => {
                        table.setPageSize(Number(e.target.value));
                     }}
                  >
                     {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                           {pageSize}
                        </option>
                     ))}
                  </select>{" "}
               </div>
               out of {users?.length}
            </div>
            <div className="right">
               <button
                  className="prev"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
               >
                  {"<"}
               </button>

               {generatePaginationButtons(
                  table.getState().pagination.pageIndex + 1,
                  table.getPageCount(),
                  (page) => table.setPageIndex(page - 1)
               )}

               <button
                  className="next"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
               >
                  {">"}
               </button>
            </div>
            {/* <div className="page-index">
                     <button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                     >
                        {"<"}
                     </button>
                     {table.getPageCount() > 1 &&
                        Array.from({ length: table.getPageCount() }).map((_, index) => (
                           <button
                              key={index}
                              onClick={() => table.setPageIndex(index)}
                              className={
                                 table.getState().pagination.pageIndex === index
                                    ? "active"
                                    : ""
                              }
                           >
                              {index + 1}
                           </button>
                        ))}
                     <button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                     >
                        {">"}
                     </button>
                  </div> */}
         </div>
      </>
   );
};

export default UserList;