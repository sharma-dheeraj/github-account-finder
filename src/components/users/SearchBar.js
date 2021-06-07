import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <input type="text" name="searchbar" placeholder="Search..." />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
