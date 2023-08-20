import React from "react";
import "./TopBar.css";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";

export default function TopBar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">social media</span>
      </div>
      <div className="topbar-center">
        <div className="searchbar">
          <Search sx={{fontSize:"20px" , marginLeft:"10px"}} />
          <input
            className="search-input"
            placeholder="search for friend , post , ..."
            type="text"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbarLinks">
          <span className="topbarLink">Home page</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbar-icons">
            <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">
                    1
                </span>
            </div>
            <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">
                    1
                </span>
            </div>
            <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">
                    1
                </span>
            </div>
        </div>
        <img src="/assets/person/1.jpeg" alt=""  className="topbarImg"/>
      </div>
    </div>
  );
}
