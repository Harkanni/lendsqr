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

const UserList: React.FC = () => {
   const { users, loading, error, updateUserStatus } = useUserContext();
      const navigate = useNavigate();
   const [sorting, setSorting] = useState<SortingState>([]);
   const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

   const toggleFilterModal = () => setShowFilterModal(!showFilterModal);

   const getStatusStyle = (status: string): React.CSSProperties => {
      switch (status) {
         case "Active":
            return { color: "green", fontWeight: "bold" };
         case "Blacklisted":
            return { color: "red", fontWeight: "bold" };
         case "Inactive":
            return { color: "gray", fontStyle: "italic" };
         default:
            return {};
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

   if (!users) {
      return <p>Loading users...</p>;
   }

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
               <div className="pagination-controls">
                  <div className="page-amount-count">
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
                     out of {users.length}
                  </div>
                  <div>
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
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default UserList;