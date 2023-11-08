import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import JoblyApi from './api';
import JobsList from './JobsList';

/**
 * Renderes Company Detail page
 */
function CompanyDetail() {
  const [company, setCompany] = useState({ company: null, isLoading: true });
  const { handle } = useParams();

  useEffect(function getCompany() {
    async function getACompany() {
      const companyData = await JoblyApi.getCompany(handle);
      setCompany({ company: companyData, isLoading: false });
    }
    getACompany();
  }, [handle]);

  if (company.isLoading) return <p>Loading...</p>;

  const { name, description, jobs } = company.company;

  return (
    <div className='CompanyDetail'>
      <h2>{name}</h2>
      <p>{description}</p>
      <JobsList jobs={jobs} />
    </div>
  );
}

export default CompanyDetail;