import React from "react";
import Particle from "./Particle";
import { Container } from "react-bootstrap";
import { FaBug } from "react-icons/fa";

const Bugs = () => {
  return (
    <Container fluid className="home-section" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container className="home-content">
        <FaBug style={{ fontSize: "50px", color: "red" }} />
        <h1>
          We'll Be Back <b className="purple"> Soon!</b>
        </h1>
        <p className="home-about-body">
          Our website is currently down due to financial constraints. We
          apologize for the inconvenience. We're working to resolve this issue
          and will be back up and running soon. Thank you for your patience.
        </p>
        <p>In the meantime, you can follow us on:</p>
        <ul>
          <li>
            <a
              href="https://twitter.com/IntiMates_Plus"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{" "}
            @IntiMates_Plus
          </li>
          <li>
            <a
              href="https://facebook.com/Intimatesplus"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>{" "}
            @Intimatesplus
          </li>
        </ul>
        <p>Thank you for your continued support! </p>
      </Container>
    </Container>
  );
};

export default Bugs;
