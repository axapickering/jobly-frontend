import React, { useState, useEffect } from 'react';
import JoblyApi from './api';
import { Link } from "react-router-dom";
import CompaniesList from './CompaniesList';
import SearchBar from './SearchBar';

/**
 * Renders Companies page
 */
function CompaniesPage() {
  const [companies, setCompanies] = useState({ companies: null, isLoading: true });

  useEffect(function fetchAllCompanies() {
    getCompanies();
  }, []);

  async function getCompanies(name) {
    let response = name
      ? await JoblyApi.getCompanies(name)
      : await JoblyApi.getCompanies();

    setCompanies({ companies: response, isLoading: false });
  }

  if (companies.isLoading) return <p>Loading....</p>;

  return (
    <div className='CompaniesPage'>
      <SearchBar handleSubmit={getCompanies} />
      <CompaniesList companies={companies.companies} />
    </div>
  );
}

export default CompaniesPage;