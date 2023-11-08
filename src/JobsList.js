import React from 'react';
import JobCard from './JobCard'
/**
 * Renderes Company Detail page
 */
function JobsList({jobs}) {

  return(
    <div className='JobsList flex-column'>
      {jobs.map(job => (
        <JobCard job={job}/>
      ))}
    </div>
  )
}

export default JobsList;