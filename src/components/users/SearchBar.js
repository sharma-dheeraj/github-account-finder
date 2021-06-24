import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const SearchBar = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [searchbar, setSearchbar] = useState("");

  const onChange = (event) => {
    setSearchbar(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (searchbar === "") {
      alertContext.setAlert("Please enter something", "light");
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
          className="btn btn-light btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBar;
