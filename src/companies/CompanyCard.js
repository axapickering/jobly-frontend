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

  const imgStyle = { height: '30px', width: '40px'};

  const displayImg = logoUrl
    ? <img
        className="float-end ms-5 thumbnail"
        style={imgStyle}
        src={logoUrl}
        alt={handle}>
      </img>
    : "";

  return (
    <div className="card mb-3">
      <div className="card-body">
        <Link className="text-body text-decoration-none" to={`/companies/${handle}`}>
          <h6 class="card-title">{name}{displayImg}</h6>
          <p class="card-text"><small>{description}</small></p>
        </Link>
      </div>
    </div>
  );

}

export default CompanyCard;