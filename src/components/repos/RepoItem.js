import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  if (repo) {
    return (
      <div className="card all-center">
        <h3>
          <a href={repo.html_url}>
            <strong>
              Repo Name:
              {repo.full_name}
            </strong>
          </a>{" "}
          <p>
            <strong>
              Description:
              {repo.description}
            </strong>
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
