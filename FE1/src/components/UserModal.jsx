import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const UserModal = ({ isOpen, onClose, onSubmit, editingUser }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
    } else {
      setName('');
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter a name!');
      return;
    }
    onSubmit({ name: name.trim() });
    setName('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {editingUser ? '✏️ Edit User' : '➕ Create New User'}
          </h2>
          <button className="modal-close" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input
              id="userName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              placeholder="Enter user name..."
              autoFocus
            />
            <p className="form-hint">
              This will be displayed publicly on the user's profile.
            </p>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              {editingUser ? 'Update User' : 'Create User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
