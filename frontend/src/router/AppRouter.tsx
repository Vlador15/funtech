import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux.ts';
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout.tsx';
import Login from '@/pages/Login.tsx';
import Profile from '@/pages/Profile.tsx';
import LinkAnalyticsPage from '@/pages/LinkAnalyticsPage.tsx';
import LinksPage from '@/pages/LinksPage.tsx';

const AppRouter = () => {
  const isAuth = useAppSelector((s) => s.auth.isAuth);

  if (!isAuth) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/links/:id" element={<LinkAnalyticsPage />} />
        <Route path="*" element={<Navigate to="/profile" />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
