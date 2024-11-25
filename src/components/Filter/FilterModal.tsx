// src/components/FilterModal.tsx
import React, { useState } from "react";
import "./filterModal.scss";

interface FilterModalProps {
   toggleModal: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ toggleModal }) => {
   const [name, setName] = useState<string>("");
   const [organization, setOrganization] = useState<string>("");
   const [year, setYear] = useState<string>("");
   const [status, setStatus] = useState<string>("");

   const handleFilter = () => {
      toggleModal();
   };

   return (
      <div className="filter-modal">
         <div className="filters">
            <div className="organization">
               <h5>Organization</h5>
               <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </div>

            <div className="username">
               <h5>Username</h5>
               <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="User"
               />
            </div>

            <div className="username">
               <h5>Email</h5>
               <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Email"
               />
            </div>

            <div className="username">
               <h5>Phone Number</h5>
               <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Phone Number"
               />
            </div>

            <div className="year">
               <h5>Status</h5>
               <select value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="">Status</option>
                  <option value="Pending">Pending</option>
                  <option value="InActive">Inactive</option>
                  <option value="Active">Active</option>
                  <option value="Blacklisted">Blacklisted</option>
               </select>
            </div>

            <div className="year date">
               <h5>Date</h5>
               <input type="date" />               
            </div>

            <div className="buttons">
               <button onClick={toggleModal}>Reset</button>
               <button onClick={handleFilter}>Filter</button>
            </div>
         </div>
      </div>
   );
};

export default FilterModal;