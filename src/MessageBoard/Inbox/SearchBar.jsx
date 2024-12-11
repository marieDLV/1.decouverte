// SearchBar.jsx
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="srch_bar">
      <div className="stylish-input-group">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          onChange={handleInputChange}
        />
        <span className="input-group-addon">
          <button type="button">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;