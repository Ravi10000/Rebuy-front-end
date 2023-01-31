import "./empty-list.styles.scss";

import React from "react";

const EmptyList = ({ listName }) => {
  return (
    <div className="empty-list">
      <img src="/sorry.png" alt="empty-cart" />
      <p>nothing is in your {listName}</p>
    </div>
  );
};

export default EmptyList;
