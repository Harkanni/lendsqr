import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnDef,
  SortingState,
  flexRender,
} from "@tanstack/react-table";
import useUser from "../utils/UserContext";
import { UserDetails, Users } from "../utils/types";
import ActionMenu from "../components/ActionMenu";
import FilterModal from "../components/FilterModal";
import sortIcon from "../assets/filter.png";
import arrowDown from "../assets/filter.png";
import arrowUp from "../assets/filter.png";

const UserList: React.FC = () => {
   const { users, fetchUserById, fetchUsers } = useUser();
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
          style={{ cursor: "pointer" }}
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
          style={{ cursor: "pointer" }}
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
          onClick={() => navigate(`/dashboard/users/${info.row.original.id}`)}
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
          style={{ cursor: "pointer" }}
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
      header: () => <span>Action</span>,
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
      fetchUsers();
   }, [])
 
   if (!users) {
     return <p>Loading users...</p>;
   }
 
  return (
    <div>
      <button onClick={toggleFilterModal}>
        Filter By <img src={arrowDown} alt="" />
      </button>
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className="pagination-controls">
        <div>
          Showing{" "}
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
  );
};

export default UserList;
