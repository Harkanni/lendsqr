// src/components/UserSummary.tsx
import React from "react";
import "./userListSummary.scss";
import { dbIcon, documentIcon, doubleUserIcon, trippleUserIcon } from "../assets";


// Summary card data
const summaryData = [
   { title: "USERS", value: "2,453", icon: doubleUserIcon },
   { title: "ACTIVE USERS", value: "2,453", icon: trippleUserIcon },
   { title: "USERS WITH LOANS", value: "12,453", icon: documentIcon },
   { title: "USERS WITH SAVINGS", value: "102,453", icon: dbIcon },
];

const UserSummary: React.FC = () => {
   return (
      <>
         <p className="user-title">User</p>
         <div className="user-summary">
            {summaryData.map((item, index) => (
               <div key={index} className="summary-card">
                  <div className="icon">
                     <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="details">
                     <p className="title">{item.title}</p>
                     <p className="value">{item.value}</p>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};

export default UserSummary;