import React from "react";

const About = () => {
  return (
    <div style={{ margin: "0px 10px" }}>
      <h1 style={{ color: "white" }}>About Github Account Finder</h1>
      <br />
      <p style={{ color: "white" }}>
        This web app searches for users based on the search query in github
        users name and their bio's to find the matching user.
        <br />
        This account finder was build with <strong>
          create-react-app
        </strong>{" "}
        using <strong>hooks</strong> and <strong>context api</strong> for state
        management.
        <br />
        <br />
        <a
          href="https://www.github.com/sharma-dheeraj/github-account-finder"
          className="btn btn-light"
        >
          Source
        </a>
        <a
          href="https://www.github.com/sharma-dheeraj"
          className="btn btn-primary"
        >
          Author
        </a>
        <a
          href="https://www.linkedin.com/in/dheeraj-s/"
          className="btn btn-primary"
        >
          LinkedIn
        </a>
      </p>
      <br />
      <h3 style={{ color: "#ffcd73" }}> version: 1.0.0</h3>
    </div>
  );
};
export default About;
