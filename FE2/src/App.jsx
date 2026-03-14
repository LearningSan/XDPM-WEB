import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UserCard from "./components/UserCard";
import UserModal from "./components/UserModal";

import { userAPI } from "./services/api";

import "./App.css";

function App() {

  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("loading"); 
  // loading | success | failed

  const [showModal, setShowModal] = useState(false);

  const loadUsers = async () => {
    try {

      setStatus("loading");

      const response = await userAPI.getAllUsers();

      console.log("API DATA:", response.data);

      // backend có thể trả data hoặc trực tiếp array
      const data = response.data?.data || response.data || [];

      setUsers(data);

      setStatus("success");

    } catch (err) {

      console.error(err);

      setStatus("failed");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <BrowserRouter>

      <div className="app">

        <Header onCreateClick={() => setShowModal(true)} />

        <div className="app-container">

          <Sidebar />

          <main className="main-content">

            <Routes>

              <Route path="/" element={<Navigate to="/users" />} />

              <Route
                path="/users"
                element={
                  <>
                    <h1>All Users</h1>
                    <p>Manage and view all registered users</p>

                    {/* STATUS */}

                    {status === "loading" && (
                      <div className="status loading">
                        ⏳ Loading users...
                      </div>
                    )}

                    {status === "failed" && (
                      <div className="status error">
                        ❌ Failed to connect backend
                      </div>
                    )}

                    {status === "success" && (
                      <div className="users-grid">
                        {users.map((user) => (
                          <UserCard key={user.id} user={user} />
                        ))}
                      </div>
                    )}
                  </>
                }
              />

            </Routes>

          </main>

        </div>

        {/* MODAL chỉ hiện khi click */}

        {showModal && (
          <UserModal
            onClose={() => setShowModal(false)}
            reloadUsers={loadUsers}
          />
        )}

      </div>

    </BrowserRouter>
  );
}

export default App;