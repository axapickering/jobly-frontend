import React, { useState } from 'react';

/**
 * Renders a search bar
 *
 *  Props: handleSubmit - function from parent that handles submit action
 *
 *  State: formData - current user input, used to update search bar value
 *
 *  {CompaniesPage, JobsPage} => SearchBar
 */
function SearchBar({ handleSubmit }) {
  const [formData, setFormData] = useState('');

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    console.log("IN SUBMIT")
    handleSubmit(formData.trim());
    setFormData(fdata => (''));
  }

  return (
    <div className="input-group m-3">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            type="search"
            onChange={handleChange}
            value={formData}
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon" />
          <button type="submit" className="btn btn-primary">search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar