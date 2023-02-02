import React from "react";
import "./search.styles.scss";
import SearchBar from "../../components/search-bar/search-bar.component";

export default function SearchPage() {
  return (
    <div className="search-page">
      <div className="container">
        <SearchBar />
      </div>
    </div>
  );
}
