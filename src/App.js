import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import SearchBar from "./components/users/SearchBar";
import "./App.css";
class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  searchUsers = (search) => {
    this.setState({ loading: true });
    fetch(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ loading: false, users: data.items }));
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchBar searchUsers={this.searchUsers} />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default App;
