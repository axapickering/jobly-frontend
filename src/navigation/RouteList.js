import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from "../HomePage";
import CompaniesPage from "../companies/CompaniesPage";
import CompanyDetail from "../companies/CompanyDetail";
import JobsPage from "../jobs/JobsPage";
import NotFound from "../NotFound"
import LoginForm from "../user/LoginForm"
import ProfilePage from "../user/ProfilePage"
import SignupForm from "../user/SignupForm"

/**
 * Registers routes
 *
 * App => RouteList -> Routes -> {Route, Route....}
 *
 *
 */
function RouteList({signup, login}) {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<CompaniesPage />} path="/companies" />
      <Route element={<CompanyDetail />} path="/companies/:handle" />
      <Route element={<JobsPage />} path="/jobs" />
      <Route element={<SignupForm signup={signup}/>} path="/signup" />
      <Route element={<LoginForm login={login}/>} path="/login" />
      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<NotFound/>} path="*"/>
    </Routes>
  );
}

export default RouteList;