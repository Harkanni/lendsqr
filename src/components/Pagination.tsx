


import React from 'react'
import { useUserContext } from '../utils/DataContext';

const Pagination = ({ table } : any) => {
   const { users, loading, error, updateUserStatus } = useUserContext();

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

   return (
      <>
         {/* Pagination Controls */}
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
   )
}

export default Pagination
