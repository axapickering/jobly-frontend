import React from "react";
import { Link } from "react-router-dom";

/**
 * Renders Nav bar Links
 *
 * App -> Nav -> {Link,...}
 */
function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to={`/`}>Jobly</Link>
        <div  id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item nav-link">
              <Link class="nav-link" aria-current="page" to={`/companies`}>Companies</Link>
            </li>
            <li class="nav-item nav-link">
              <Link class="nav-link" aria-current="page"to={`/jobs`}>Jobs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
