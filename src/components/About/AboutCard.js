import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p style={{ textAlign: "justify" }} className="home-about-body">
          Hi Everyone, I am <span className="purple">Joseph Ngatia</span> from
          <span className="purple"> Nairobi, Kenya.</span>
          <br />I am a <span className="purple">
            Full-Stack Developer
          </span> and <span className="purple">AI Systems Engineer</span>{" "}
          specializing in <span className="purple">MERN Stack</span>,{" "}
          <span className="purple">React Native</span>, and{" "}
          <span className="purple">TypeScript</span>.
          <br />
          <br />
          With hands-on experience in software development, I have successfully
          built applications for small and medium-sized businesses while
          integrating AI-driven solutions. My expertise includes:
          <br />
          <br />
          🔹 LLM-Based AI System Development (OpenAI, Chatbots, Voice AI)
          <br />
          🔹 Advanced Algorithms & Data Structures
          <br />
          🔹 Web & Mobile App Development with AI Enhancements
          <br />
          <br />
          Beyond development, I am also the Founder and lead developer at{" "}
          <span class="purple" style={{ color: "red" }}>
            IntimatesPlus
          </span>
          , a platform designed to bridge the gap between fleeting connections
          and meaningful relationships. Learn more{" "}
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
            <ImPointRight /> AI & Electronics Integrations
          </li>
          <li className="about-activity">
            <ImPointRight /> Traveling
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
