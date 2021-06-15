import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import SearchBar from "./components/users/SearchBar";
import Alert from "./components/layout/Alert";
import "./App.css";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  searchUsers = (search) => {
    this.setState({ loading: true });
    fetch(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ loading: false, users: data.items }));
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Alert alert={this.state.alert} />
        <SearchBar
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={this.state.users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default App;
