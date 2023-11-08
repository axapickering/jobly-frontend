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
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div  id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item nav-link active">
              <Link class="nav-link active" aria-current="page" to={`/companies`}>Companies</Link>
            </li>
            <li class="nav-item nav-link active">
              <Link class="nav-link active" aria-current="page"to={`/jobs`}>Jobs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
