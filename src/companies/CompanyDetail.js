import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from "react-router-dom";
import JoblyApi from '../api';
import JobsList from '../jobs/JobsList';
import Loading from '../Loading';

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
  const [company, setCompany] = useState(null);
  const [error, setError] = useState([]);

  const { handle } = useParams();

  useEffect(function getCompany() {
    async function getACompany() {
      try {
        const companyData = await JoblyApi.getCompany(handle);
        setCompany({ company: companyData });
      } catch (err) {
        setError([err]);
      }
    }
    getACompany();
  }, [handle]);


  if (error.length > 0){
    return(
      <div>
        <ul>
          {error.map(err => (
            <h1 className='text-white'>{err}</h1>
          ))}
        </ul>
      </div>
    )
  }

  if (company === null) return <Loading />;

  const { name, description, jobs } = company.company;

  return (
    <div className='CompanyDetail text-white'>
      <h2 className='mt-2'>{name}</h2>
      <p>{description}</p>
      <JobsList jobs={jobs} />
    </div>
  );
}

export default CompanyDetail;