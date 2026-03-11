import React from 'react';
import { FiHome, FiUsers, FiTrendingUp, FiBookmark, FiSettings } from 'react-icons/fi';

const Sidebar = ({ activeView, onViewChange }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'users', label: 'All Users', icon: FiUsers },
    { id: 'trending', label: 'Trending', icon: FiTrendingUp },
    { id: 'bookmarks', label: 'Bookmarks', icon: FiBookmark },
    { id: 'settings', label: 'Settings', icon: FiSettings },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${activeView === item.id ? 'active' : ''}`}
              onClick={() => onViewChange(item.id)}
            >
              <Icon className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-card">
          <h3 className="card-title">🎯 Quick Stats</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">24</div>
              <div className="stat-label">Total Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">12</div>
              <div className="stat-label">Active Today</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
