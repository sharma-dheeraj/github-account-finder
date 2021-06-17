import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import SearchBar from "./components/users/SearchBar";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import "./App.css";
class App extends Component {
  // APP STATES
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {},
    repos: [],
  };

  // SEARCH FOR ARRAY OF USERS WITH MATCHING RESULTS
  searchUsers = async (search) => {
    this.setState({ loading: true });
    fetch(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ users: data.items, loading: false }));
  };

  // CLEAR USER ARRAY
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  // ALERTS USER IF SEARCH PARAMETER IS EMPTY
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  // GET SINGLE USER
  getUser = async (username) => {
    this.setState({ loading: true });
    fetch(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ user: data, loading: false }));
  };

  // SHOWING USER REPOS
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ repos: data, loading: false }));

    // this.setState({ repos: res.data, loading: false });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <SearchBar
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <div className="container">
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
                  </div>
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  loading={this.state.loading}
                  user={this.state.user}
                  repos={this.state.repos}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
