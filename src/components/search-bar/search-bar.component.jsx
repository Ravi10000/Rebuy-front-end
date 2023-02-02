import React from 'react'
import "./search-bar.styles.scss";

export default function SearchBar() {
  return (
    <div className="search-bar">
        <input type="text" placeholder='type to search'/>
        <img src="/search.png" alt="search" />
    </div>
  )
}
