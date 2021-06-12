import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    searchbar: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.searchUsers(this.state.searchbar);
    this.setState({ searchbar: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="searchbar"
            placeholder="Search..."
            value={this.state.searchbar}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        <button
          className="btn btn-light btn-block"
          onClick={this.props.clearUsers}
        >
          Clear
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
};

export default SearchBar;
