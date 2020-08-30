import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [searchText, setSearchText] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(searchText);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="ui field">
          <label>Search for videos</label>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
