import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/IntiMates+.png";
import myImg from "../../Assets/jdtheefirst2.png";
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
              title="Dating Platform"
              description="An innovative app designed and developed to redefine the dynamics of modern relationships. Features include real-time chatting, push notifications, video and voice calls, matching algorithm and subscriptions"
              demoLink="https://fuckmate.boo/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sports Club"
              description="World Samma Federation: A complete full Stack organization's large-scale application, designed and developed with features like real-time chatting, push notifications, streaming, grading, and different roles."
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
