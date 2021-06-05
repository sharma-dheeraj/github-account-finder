import React, { Component } from "react";

class UserItem extends Component {
  render() {
    return (
      <div className="card text-center">
        <img
          src={this.props.user.avatar_url}
          className="round-img"
          style={{ width: "100px" }}
          alt=""
        />
        <h4>{this.props.user.login}</h4>
        <a href={this.props.user.html_url} className="btn btn-dark">
          Profile
        </a>
      </div>
    );
  }
}

export default UserItem;
