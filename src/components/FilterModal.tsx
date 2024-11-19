import React, { useState } from "react";
import "./filterModal.scss"; // Add styles here

interface FilterModalProps {
  toggleModal: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ toggleModal }) => {
  const [name, setName] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const handleFilter = () => {
    console.log("Filtering with:", { name, organization, year });
    toggleModal(); // Close modal after applying filter
  };

  const handleReset = () => {
    setName("");
    setOrganization("");
    setYear("");
    console.log("Filters reset");
  };

  return (
    <div className="filter-modal-overlay">
      <div className="filter-modal">
        <h4>Filter Users</h4>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="organization">Organization</label>
          <input
            id="organization"
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Organization"
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {new Array(30).fill(0).map((_, idx) => (
              <option key={idx} value={2020 - idx}>
                {2020 - idx}
              </option>
            ))}
          </select>
        </div>

        <div className="modal-actions">
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
          <button className="apply-btn" onClick={handleFilter}>
            Apply Filters
          </button>
          <button className="close-btn" onClick={toggleModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
