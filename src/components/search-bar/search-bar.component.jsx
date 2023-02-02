import React from "react";
import "./search-bar.styles.scss";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="start typing..." />
      <div className="search-icon">
        <img src="/search-custom.png" alt="search" />
      </div>
    </div>
  );
}
