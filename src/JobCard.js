import React from 'react';


function JobCard({ job }) {
  return (
    <div class="card w-75 mb-3">
      <div class="card-body">
        <p><strong>{job.title}</strong></p>
          <h5 class="card-title">{job.handle}</h5>
          <p class="card-text">Salary:{job.salary}</p>
          <p class="float-right">Equity: {job.equity}</p>
      </div>
    </div>
  );
}

export default JobCard;