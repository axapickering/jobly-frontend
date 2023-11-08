import React, { useState, useEffect } from 'react';
import JoblyApi from './api';
import CompaniesList from './CompaniesList';
import SearchBar from './SearchBar';

/**
 * Renders Companies page
 *
 *  state: companies - {companies:[company, ...], isLoading:boolean}
 *
 *  RouteList => CompaniesPage => {SearchBar,CompaniesList}
 */
function CompaniesPage() {
  const [companies, setCompanies] = useState({companies:null, isLoading:true}); // TODO: don't need boolean here

  useEffect(function fetchAllCompanies() {
    getCompanies();
  },[]);

  async function getCompanies(name) {
    let response = name // TODO: no ternary needed
      ? await JoblyApi.getCompanies(name)
      : await JoblyApi.getCompanies();

    setCompanies({ companies: response, isLoading: false });
  }

  if (companies.isLoading) return <p>Loading....</p>; // TODO: make component for loading

  return (
    <div className='CompaniesPage'>
      <SearchBar handleSubmit={getCompanies} />
      <CompaniesList companies={companies.companies} />
    </div>
  );
}

export default CompaniesPage;