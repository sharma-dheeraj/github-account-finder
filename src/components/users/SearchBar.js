import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ setAlert, searchUsers, showClear, clearUsers }) => {
  const [searchbar, setSearchbar] = useState("");

  const onChange = (event) => {
    setSearchbar(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (searchbar === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(searchbar);
      setSearchbar("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="searchbar"
          placeholder="Search..."
          value={searchbar}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default SearchBar;
