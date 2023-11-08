import React from 'react';
import JobCard from './JobCard'
/**
 * Renders list of jobs
 *
 * Props: jobs - [job, ...] where job is object containing info about a job
 *
 * {CompanyDetails,JobsPage} => JobsList => JobCard
 */
function JobsList({jobs}) { //TODO: flesh out props

  return(
    <div className='JobsList flex-column'>
      {jobs.map(job => (
        <JobCard job={job}/>
      ))}
    </div>
  )
}

export default JobsList;