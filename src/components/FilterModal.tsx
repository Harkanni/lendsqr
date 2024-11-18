// src/components/FilterModal.tsx
import React, { useState } from "react";

interface FilterModalProps {
  toggleModal: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ toggleModal }) => {
  const [name, setName] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const handleFilter = () => {
    console.log("Filtering with:", { name, organization, year });
    toggleModal(); // Assuming you'll integrate actual filter logic here or in context
  };

  return (
    <div>
      <h4>Filter Users</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
        placeholder="Organization"
      />
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Select Year</option>
        {new Array(30).fill(0).map((_, idx) => (
          <option key={idx} value={2020 - idx}>
            {2020 - idx}
          </option>
        ))}
      </select>
      <button onClick={handleFilter}>Apply Filters</button>
      <button onClick={toggleModal}>Close</button>
    </div>
  );
};

export default FilterModal;
