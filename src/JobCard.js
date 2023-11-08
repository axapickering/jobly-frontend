import React from 'react';

/**
 *  Renders one card with info about a job
 *
 * Props: job - object containing all info about job
 *
 *  JobsList -> JobCard
 */
function JobCard({ job }) {

  if (job.companyHandle) {

  job.companyHandle = job.companyHandle
    .split("-")
    .map(name => name.charAt(0).toUpperCase() + name.slice(1))
    .join("-");

  }

  return (
    <div class="card w-75 mb-3">
      <div class="card-body">
        <p><strong>{job.title}</strong></p>
          <h5 class="card-title">{job.companyHandle}</h5>
          <p class="card-text">Salary:{job.salary}</p>
          <p class="float-right">Equity: {job.equity}</p>
      </div>
    </div>
  );
}

export default JobCard;