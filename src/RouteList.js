import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from "./HomePage";
import CompaniesPage from "./CompaniesPage";
import CompanyDetail from "./CompanyDetail";
import JobsPage from "./JobsPage";
import NotFound from "./NotFound"

/**
 * Registers routes
 *
 * App => RouteList -> Routes -> {Route, Route....}
 *
 *
 */
function RouteList() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<CompaniesPage />} path="/companies" />
      <Route element={<CompanyDetail />} path="/companies/:handle" />
      <Route element={<JobsPage />} path="/jobs" />
      <Route element={<NotFound/>} path="*"/>
    </Routes>
  );
}

export default RouteList;