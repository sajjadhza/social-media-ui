import React from "react";
import "./TopBar.css";
import { Person, Search } from "@mui/icons-material";

export default function TopBar() {
  return (
    <div className="topbarcontainer">
      <div className="topbarLeft">
        <span className="logo">social media</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input
            className="search-input"
            placeholder="search for friend , post , ..."
            type="text"
          />
        </div>
      </div>
      <div className="topbarRight">
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
        </div>
      </div>
    </div>
  );
}
