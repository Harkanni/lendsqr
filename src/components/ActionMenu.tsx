// src/components/ActionMenu.tsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/DataContext";

import './actionMenu.scss';
import { blackListIcon, usersIcon6, viewIcon } from "../assets";


interface ActionMenuProps {
   userId: string;
}

const ActionMenu: React.FC<ActionMenuProps> = ({ userId }) => {
   const [showMenu, setShowMenu] = useState(false);
   const menuRef = useRef<HTMLDivElement>(null);
   const { updateUserStatus, users } = useUserContext();
   const navigate = useNavigate();


   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);






   const toggleMenu = () => setShowMenu(!showMenu);
   
   const handleViewDetails = () => navigate(`/user/${userId}`);

   const handleClickOutside = (event: MouseEvent) => {
      // Close the menu if the click is outside the menu container
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
  


   const handleBlacklistUser = () => {
      updateUserStatus(userId, "Blacklisted");
      toggleMenu();
   };


   const handleActivateUser = () => {

      updateUserStatus(userId, "Active");

      toggleMenu();
   };

   return (
      <div className="menu-container" onClick={toggleMenu}>
        <button className="menu-button">
          &#x22EE; {/* Vertical ellipsis */}
        </button>
        {showMenu && (
          <div className="menu-dropdown">
            <ul>
              <li onClick={handleViewDetails}>
                <img src={viewIcon} alt="View Details" />
                View Details
              </li>
              <li onClick={handleBlacklistUser}>
                <img src={blackListIcon} alt="Blacklist User" />
                Blacklist User
              </li>
              <li onClick={handleActivateUser}>
                <img src={usersIcon6} alt="Activate User" />
                Activate User
              </li>
            </ul>
          </div>
        )}
      </div>
    );
};

export default ActionMenu;
