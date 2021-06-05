import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: "1",
    login: "mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  };
  render() {
    return (
      <div className="card text-center">
        <img
          src={this.state.avatar_url}
          className="round-img"
          style={{ width: "100px" }}
          alt=""
        />
        <h4>{this.state.login}</h4>
        <a href={this.state.html_url} className="btn btn-dark">
          Profile
        </a>
      </div>
    );
  }
}

export default UserItem;
