import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import JoblyApi from './api';
import JobsList from './JobsList';

/**
 * Renders Company Detail page
 *
 *  Param: handle - company handle
 *
 *  State : company - {company, isLoading:boolean}
 *          where company is an object containing info about one company
 *
 *  RouteList => CompanyDetail => JobsList
 */
function CompanyDetail() {
  const [company, setCompany] = useState({ company: null, isLoading: true }); // TODO: bool not needed
  const { handle } = useParams();

  useEffect(function getCompany() {
    async function getACompany() {
      const companyData = await JoblyApi.getCompany(handle); // TODO: try/catch, create error state
      setCompany({ company: companyData, isLoading: false });
    }
    getACompany();
  }, [handle]);


  // TODO: check for error state
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