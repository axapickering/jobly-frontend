import React from 'react';
import { Link } from "react-router-dom";

function CompanyCard({ company }) {
  return (
    <div class="card w-75 mb-3">
      <div class="card-body">
        <Link to={`/companies/${company.handle}`}>
          <h5 class="card-title">{company.name}</h5>
          <p class="card-text">{company.description}</p>
          <img class="float-right" src={company.logoUrl} alt={company.handle}></img>
        </Link>
      </div>
    </div>
  );
}

export default CompanyCard;