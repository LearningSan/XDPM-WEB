import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';

const Header = ({ onCreateClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="header-logo">
          <HiOutlineSparkles className="logo-icon" />
          <span className="logo-text">User<span className="logo-accent"></span></span>
        </div>

        {/* Search Bar */}
        <div className="header-search">
          <FiSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search users..." 
            className="search-input"
          />
        </div>

        {/* Actions */}
        <div className="header-actions">
          <button className="btn-create" onClick={onCreateClick}>
            Create User
          </button>
          <button className="btn-icon">
            <FiBell />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
