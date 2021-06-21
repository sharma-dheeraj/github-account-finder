import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const SearchBar = ({ setAlert, showClear, clearUsers }) => {
  const githubContext = useContext(GithubContext);
  const [searchbar, setSearchbar] = useState("");

  const onChange = (event) => {
    setSearchbar(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (searchbar === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(searchbar);
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
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default SearchBar;
