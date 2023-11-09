import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../context/userContext";

/**
 * Renders Nav bar Links
 *
 * App -> Nav -> {Link,...}
 */
function Nav({ logout }) {
  const username = useContext(userContext)?.username;
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to={`/`}>Jobly</Link>
        <div id="navbarSupportedContent">

          {username
            ? (
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item nav-link">
                  <Link class="nav-link" aria-current="page" to={`/companies`}>Companies</Link>
                </li>
                <li class="nav-item nav-link">
                  <Link class="nav-link" aria-current="page" to={`/jobs`}>Jobs</Link>
                </li>
                <li class="nav-item nav-link">
                  <Link class="nav-link" aria-current="page" to={`/profile`}>Profile</Link>
                </li>
                <li class="nav-item nav-link">
                  <Link onClick={logout} class="nav-link" aria-current="page" to={`/`}>Logout: {username}</Link>
                </li>
              </ul>
              )
            : (
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item nav-link">
                  <Link class="nav-link" aria-current="page" to={`/login`}>Login</Link>
                </li>
                <li class="nav-item nav-link">
                  <Link class="nav-link" aria-current="page" to={`/signup`}>Sign Up</Link>
                </li>
              </ul>
              )}

            </div>
      </div>
    </nav>
  );
}

export default Nav;
