import React, { useState } from "react";
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
import UserlistSummary from '../../../components/User/List/UserlistSummary'
import { useUserContext } from '../../../services/context/DataContext';
import { Users } from "../../../utils/types";
import ActionMenu from "../../../components/ActionMenu/ActionMenu";
import FilterModal from "../../../components/FilterModal";
import sortIcon from "../../../assets/icons/filter.png";
import arrowDown from "../../../assets/icons/filter.png";
import arrowUp from "../../../assets/icons/filter.png";
import Loading from "../../../components/Loading/Loading";
import Pagination from "../../../components/Pagination/Pagination";
import formatDate from "../../../utils/formatDate";

const UserList: React.FC = () => {
   const { users, loading, error, } = useUserContext();
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
            </div>
         </div>

         <Pagination table={table} />
      </>
   );
};

export default UserList;