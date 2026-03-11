import React from 'react';
import { FiEdit2, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { HiOutlineUser } from 'react-icons/hi2';

const UserCard = ({ user, onEdit, onDelete }) => {
  // Generate random avatar color
  const avatarColors = ['#3b49df', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
  const randomColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];

  return (
    <article className="user-card">
      <div className="card-header">
        <div className="user-avatar" style={{ backgroundColor: randomColor }}>
          <HiOutlineUser />
        </div>
        <div className="user-info">
          <h3 className="user-name">{user.name}</h3>
          <p className="user-id">ID: {user.id}</p>
        </div>
        <div className="card-actions">
          <button className="action-btn" onClick={() => onEdit(user)} title="Edit">
            <FiEdit2 />
          </button>
          <button className="action-btn danger" onClick={() => onDelete(user.id)} title="Delete">
            <FiTrash2 />
          </button>
        </div>
      </div>

      <div className="card-content">
        <div className="user-stats">
          <div className="stat">
            <span className="stat-value">42</span>
            <span className="stat-label">Posts</span>
          </div>
          <div className="stat">
            <span className="stat-value">1.2K</span>
            <span className="stat-label">Reactions</span>
          </div>
          <div className="stat">
            <span className="stat-value">156</span>
            <span className="stat-label">Followers</span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="user-tags">
          <span className="tag">#developer</span>
          <span className="tag">#react</span>
          <span className="tag">#javascript</span>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
