import React from 'react';
import CompanyCard from './CompanyCard'
/**
 * Renders Company Detail page
 *
 * props: companies : [company, ...]
 *        where company is object containing data about one company
 *
 *  CompaniesPage => CompaniesList => CompanyCard
 */
function CompaniesList({companies}) { // TODO: spread props and add key!!!!!!!!

  return(
    <div className='CompaniesList flex-column'>
      {companies.map(company => (
        <CompanyCard company={company}/>
      ))}
    </div>
  )
}

export default CompaniesList;