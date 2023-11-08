import React, { useEffect } from 'react';
import { useState } from 'react';
import JoblyApi from "./api";
import SearchBar from "./SearchBar";
import JobsList from "./JobsList";

/**
 *  Renders JobsPage
 *
 *  State: jobs - {jobs:[job, ...], isLoading: boolean}
 *         where job is an object containing info about one job
 *
 *  RouteList => JobsPage => {SearchBar/JobsList}
 */
function JobsPage() {
    const [jobs,setJobs] = useState({jobs:null,isLoading:true});

  useEffect(function getJobs() {
      fetchJobs();
  },[]);

  async function fetchJobs(title) {
    const jobs = title
      ? await JoblyApi.getJobs(title)
      : await JoblyApi.getJobs();
    setJobs({jobs,isLoading:false});
  }

  if (jobs.isLoading) return <p>Loading... </p>;

  return(
    <div>
      <SearchBar handleSubmit={fetchJobs} />
      <JobsList jobs={jobs.jobs}/>
    </div>
  )
}

export default JobsPage;