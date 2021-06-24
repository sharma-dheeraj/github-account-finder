import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  if (repo) {
    return (
      <div className="card all-center">
        <h3>
          <a href={repo.html_url}>
            <span>Repo Name: </span>
            {repo.full_name}
          </a>{" "}
          <p>
            <span>Description: </span>
            {repo.description}
          </p>
        </h3>
      </div>
    );
  }
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
