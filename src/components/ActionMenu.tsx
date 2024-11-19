// src/components/ActionMenu.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/DataContext";


interface ActionMenuProps {
  userId: string;
}

const ActionMenu: React.FC<ActionMenuProps> = ({ userId }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { updateUserStatus, users } = useUserContext();
  const navigate = useNavigate();



  



  const toggleMenu = () => setShowMenu(!showMenu);
  const handleViewDetails = () => navigate(`/user/${userId}`);


  const handleBlacklistUser = () => {
    updateUserStatus(userId, "Blacklisted");
    toggleMenu();
  };


  const handleActivateUser = () => {
   
   updateUserStatus(userId, "Active");
   
    toggleMenu();
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={toggleMenu}
        style={{ border: "none", background: "transparent", cursor: "pointer" }}
      >
        &#x22EE; {/* Unicode for vertical ellipsis */}
      </button>
      {showMenu && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "0",
            background: "white",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            zIndex: 100,
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li>
              <button onClick={handleViewDetails}>View Details</button>
            </li>
            <li>
              <button onClick={handleBlacklistUser}>Blacklist User</button>
            </li>
            <li>
              <button onClick={handleActivateUser}>Activate User</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
