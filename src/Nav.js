import React from "react";
import { Link } from "react-router-dom";

/**
 * Renders Nav bar Links
 *
 * App -> Nav -> {Link,...}
 */
//TODO:Format the display NAVBAR FROM BOOTSTRAP
function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to={`/`}>Jobly</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div  id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item mr-3">
              <Link to={`/companies`}>Companies</Link>
            </li>
            <li class="nav-item mr-3">
              <Link to={`/jobs`}>Jobs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
