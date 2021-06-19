import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import SearchBar from "./components/users/SearchBar";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import "./App.css";
const App = () => {
  // APP STATES
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  // SEARCH FOR ARRAY OF USERS WITH MATCHING RESULTS
  const searchUsers = async (search) => {
    setLoading(true);
    fetch(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items);
        setLoading(false);
      });
  };

  // CLEAR USER ARRAY
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // ALERTS USER IF SEARCH PARAMETER IS EMPTY
  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  // GET SINGLE USER
  const getUser = async (username) => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  };

  // SHOWING USER REPOS
  const getUserRepos = async (username) => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <SearchBar
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
                  />
                  <div className="container">
                    <Users loading={loading} users={users} />
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
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  loading={loading}
                  user={user}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};
export default App;
