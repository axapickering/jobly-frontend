import React, { useContext, useState }from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from "../HomePage";
import CompaniesPage from "../companies/CompaniesPage";
import CompanyDetail from "../companies/CompanyDetail";
import JobsPage from "../jobs/JobsPage";
import LoginForm from "../user/LoginForm"
import ProfilePage from "../user/ProfilePage"
import SignupForm from "../user/SignupForm"
import userContext from "../context/userContext";

/**
 * Registers routes
 *
 * App => RouteList -> Routes -> {Route, Route....}
 *
 */
function RouteList({signup, login, update}) {
  const username = useContext(userContext)?.username;

  const routesLoggedIn =
   (
      <>
        <Route element={<CompaniesPage />} path="/companies" />
        <Route element={<CompanyDetail />} path="/companies/:handle" />
        <Route element={<JobsPage />} path="/jobs" />
        <Route element={<ProfilePage edit={update}/>} path="/profile" />
      </>
    )

  const routesLoggedOut =
   (
      <>
        <Route element={<SignupForm signup={signup}/>} path="/signup" />
        <Route element={<LoginForm login={login}/>} path="/login" />
      </>
    )

  return (
    <Routes>
      {username ? routesLoggedIn : routesLoggedOut};
      <Route element={<HomePage />} path="/" />
      <Route element={<Navigate to="/"/>} path="*"/>
    </Routes>
  )
}

export default RouteList;