import React, { useState } from 'react';


function SearchBar({ handleSubmit }) {
  const [formData, setFormData] = useState('');

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => (value));
  }

  function onSubmit(evt) {
    evt.preventDefault();
    console.log("IN SUBMIT")
    handleSubmit(formData);
    setFormData(fdata => (''));
  }

  return (
    <div className="input-group">
      <form onSubmit={onSubmit}>
        <div className="form-outline">
          <input onChange={handleChange} value={formData} type="search" id="search" className="form-control" />
          <label className="form-label" htmlFor="search">Search</label>
        </div>
        <button type="button" className="btn btn-primary">
        </button>
      </form>
    </div>
  );
}

export default SearchBar