import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/IntiMates+.png";
import myImg from "../../Assets/avatar.svg";
import bitsOfCode from "../../Assets/Worldsamma.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Clients' Completed <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on from design to end product.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Dating Service"
              description="An innovative platform designed to redefine the dynamics of modern relationships. Features include chatting, video and voice calls, matching algorithm, normal and premium services."
              demoLink="https://fuckmate.boo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sports Club"
              description="A complete MERN Stack organization's large-scale application, designed and developed to handle users locally across the globe. Features include chatting, streaming, grading, and divided roles."
              demoLink="https://worldsamma.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myImg} // Placeholder image or a coming soon image
              isBlog={false}
              title="More Projects Coming Soon"
              description="Stay tuned for more exciting projects! I'm constantly working on new and innovative solutions."
              demoLink="https://github.com/jdtheefirst"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
