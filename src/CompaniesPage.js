import React, { useState, useEffect } from 'react';
import JoblyApi from './api';
import CompaniesList from './CompaniesList';
import SearchBar from './SearchBar';
import Loading from './Loading';

/**
 * Renders Companies page
 *
 *  state: companies - {companies:[company, ...], isLoading:boolean}
 *
 *  RouteList => CompaniesPage => {SearchBar,CompaniesList}
 */
function CompaniesPage() {
  const [companies, setCompanies] = useState(null);

  useEffect(function fetchAllCompanies() {
    getCompanies();
  }, []);

  async function getCompanies(name) {
    let response = await JoblyApi.getCompanies(name);

    setCompanies(response);
  }

  if (companies === null) return <Loading />;

  const noCompanyHtml = <div><h2 className='text-white'>No companies found!</h2></div>

  return (
    <div className='CompaniesPage'>
      <SearchBar handleSubmit={getCompanies} />
      {companies.length === 0
      ?noCompanyHtml
      :<CompaniesList companies={companies} />}
    </div>
  );
}

export default CompaniesPage;