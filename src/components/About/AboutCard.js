import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple"> Joseph Ngatia</span> from
          <span className="purple"> Nairobi, Kenya.</span>
          <br />
          I am currently freelancing as a software developer.
          <br />
          <br />
          I have gained hands-on experience in the MERN stack and have
          successfully built applications for small and medium-sized businesses.
          <br />
          <br />
          I'm passionate about leveraging my skills to solve real-world problems
          and am always looking for new challenges. I'm open to part-time
          opportunities that allow me to contribute and grow alongside a dynamic
          team.
          <br />
          <br />
          Additionally, I am the Founder and CEO at{" "}
          <span class="purple" style={{ color: "red" }}>
            {" "}
            IntimatesPlus
          </span>
          , an innovative platform designed to help people move beyond fleeting
          comforts and find lasting connections. You can learn more about it{" "}
          <a
            href="https://x.com/jdtheefirst/status/1798216326374408584"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
          <br />
          <br />
          Apart from coding, I enjoy engaging in other activities such as...
        </p>

        <ul>
          <li className="about-activity">
            <ImPointRight /> Playing Games
          </li>
          <li className="about-activity">
            <ImPointRight /> Electronics and Software Integrations
          </li>
          <li className="about-activity">
            <ImPointRight /> Travelling
          </li>
        </ul>
        <p style={{ color: "rgb(155 126 172)" }}>
          "Transform ideas into impactful solutions."{" "}
        </p>
        <footer className="blockquote-footer">Ngatia</footer>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
