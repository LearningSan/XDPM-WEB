<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import { userAPI } from './services/api';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserCard from './components/UserCard';
import UserModal from './components/UserModal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
=======
// ─── APP.JSX ─────────────────────────────────────────────────────────────────
import { useState } from "react";
import { AppShell } from "./components/layout";
import { useCurrentUser, useNotifications } from "./hooks";
>>>>>>> 16a819fb749e5890d6c053ef25c625a22a52efdb

import FeedPage          from "./pages/FeedPage";
import DetailPage        from "./pages/DetailPage";
import { TrendingPage }  from "./pages/TrendingPage";
import NotificationsPage from "./pages/NotificationsPage";
import ProfilePage       from "./pages/ProfilePage";
import EditorPage        from "./pages/EditorPage";

const TAB_PAGES = ["feed", "trending", "notifications"];

export default function App() {
  const [activePage, setActivePage] = useState("feed");
  const [detailPost, setDetailPost] = useState(null);

  const { user: currentUser } = useCurrentUser();
  const { notifs, unreadCount, markRead, markAllRead } = useNotifications();

  // Nếu chưa đăng nhập, show trang auth
  

  function navigate(page) {
    setActivePage(page);
    setDetailPost(null);
  }

  function openPost(post) {
    setDetailPost(post);
    setActivePage("feed");
  }

  function renderPage() {
    if (detailPost) {
      return <DetailPage post={detailPost} onBack={() => setDetailPost(null)} />;
    }
    switch (activePage) {
      case "feed":          return <FeedPage onOpenPost={openPost} />;
      case "trending":      return <TrendingPage onOpenPost={openPost} />;
      case "notifications": return <NotificationsPage />;
      case "profile":       return <ProfilePage onOpenPost={openPost} />;
      case "editor":        return <EditorPage onSuccess={() => navigate("feed")} />;
      default:              return <FeedPage onOpenPost={openPost} />;
    }
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=DM+Sans:wght@400;500;600&display=swap"
      />
      <AppShell
        user={currentUser}
        activePage={activePage}
        onNavigate={navigate}
        unreadCount={unreadCount}
        showTabs={TAB_PAGES.includes(activePage) && !detailPost}
        showRightPanel={TAB_PAGES.includes(activePage) && !detailPost}
      >
        {renderPage()}
      </AppShell>
    </>
  );
}
