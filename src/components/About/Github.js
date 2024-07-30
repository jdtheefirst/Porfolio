import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const username = "jdtheefirst";
  const githubProfileUrl = `https://github.com/${username}`;

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="jdtheefirst"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      <p className="footer">
        For detailed contribution data, visit my GitHub profile:{" "}
        <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
          {username}
        </a>
      </p>
    </Row>
  );
}

export default Github;