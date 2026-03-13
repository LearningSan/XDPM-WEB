import React from "react";

function Header({ onCreateClick }) {
  return (
    <header className="header">
      <div className="logo">DevBlog</div>

      <div className="header-right">

        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input placeholder="Search users..." />
        </div>

        <button className="create-btn" onClick={onCreateClick}>
          Create User
        </button>

        <div className="notification">
          🔔
        </div>

      </div>
    </header>
  );
}

export default Header;