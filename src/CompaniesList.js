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
function CompaniesList({companies}) {

  return(
    <div className='CompaniesList flex-column'>
      {companies.map(company => (
        <CompanyCard
          key={company.handle}
          handle={company.handle}
          name={company.name}
          description={company.description}
          logoUrl={company.logoUrl}
        />
      ))}
    </div>
  )
}

export default CompaniesList;