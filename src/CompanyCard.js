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

  const displayImg = logoUrl
    ? <img className="float-right" src={logoUrl} alt={handle}></img>
    : "";

  return (
    <div className="card w-75 mb-3">
      <div className="card-body">
      <Link className="text-body text-decoration-none" to={`/companies/${handle}`}>
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          {displayImg}
        </Link>
      </div>
    </div>
  );

}

export default CompanyCard;