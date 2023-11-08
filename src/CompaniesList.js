import React from 'react';
import CompanyCard from './CompanyCard'
/**
 * Renderes Company Detail page
 */
function CompaniesList({companies}) {

  return(
    <div className='CompaniesList flex-column'>
      {companies.map(company => (
        <CompanyCard company={company}/>
      ))}
    </div>
  )
}

export default CompaniesList;