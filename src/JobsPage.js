import React, { useEffect } from 'react';
import { useState } from 'react';
import JoblyApi from "./api";
import SearchBar from "./SearchBar";
import JobsList from "./JobsList";
import Loading from './Loading';

/**
 *  Renders JobsPage
 *
 *  State: jobs - {jobs:[job, ...], isLoading: boolean}
 *         where job is an object containing info about one job
 *
 *  RouteList => JobsPage => {SearchBar/JobsList}
 */
function JobsPage() {
    const [jobs,setJobs] = useState(null);

  useEffect(function getJobs() {
      fetchJobs();
  },[]);

  async function fetchJobs(title) {
    const jobs = await JoblyApi.getJobs(title)

    setJobs({jobs});
  }

  if (jobs === null) return <Loading />;

  return(
    <div>
      <SearchBar handleSubmit={fetchJobs} />
      <JobsList jobs={jobs.jobs}/>
    </div>
  )
}

export default JobsPage;