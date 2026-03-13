import React, { useState } from "react";
import { userAPI } from "../services/api";

function UserModal({ onClose, reloadUsers }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await userAPI.createUser({
        name,
        email,
      });

      reloadUsers();

      onClose();

    } catch (err) {

      alert("Create user failed");

    }
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Create User</h2>

        <form onSubmit={handleSubmit}>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="modal-buttons">

            <button type="submit">Save</button>

            <button type="button" onClick={onClose}>
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default UserModal;