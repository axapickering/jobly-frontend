import React from 'react';
import { Link } from "react-router-dom";

/**
 *  Renders a card with info about one company
 *
 *  Props: company - object containing all info about one company
 *
 *  CompaniesList => CompanyCard
 */

function CompanyCard({ handle, name, description, logoUrl }) {
  return (
    <div class="card w-75 mb-3" >
      <div class="card-body">
        <Link to={`/companies/${handle}`}>
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <img class="float-right" src={logoUrl} alt={handle}></img>
        </Link>
      </div>
    </div>
  );
}

export default CompanyCard;