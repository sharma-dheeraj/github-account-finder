import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  if (repo) {
    return (
      <div className="card all-center">
        <h3>
          <a href={repo.html_url}>Repo Name: {repo.full_name}</a>{" "}
          <p>{repo.description}</p>
        </h3>
      </div>
    );
  }
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
