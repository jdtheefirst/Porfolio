import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/IntimatesPlus.png";
import bitsOfCode from "../../Assets/wsf.png";
import chat_room from "../../Assets/Chat_Room.png";
import aora from "../../Assets/Aora.png";
import Healthcare from "../../Assets/enroll.png";
import ecommerce from "../../Assets/Commerce.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          A Selection of My <strong className="purple">Projects</strong>
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
              ghLink="https://github.com/Admin-Apparels/IntimatesPlus"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sports Club"
              description="World Samma Federation: A complete full Stack organization's large-scale application, designed and developed with features like real-time chatting, push notifications, streaming, grading, and different roles."
              demoLink="https://worldsamma.org/"
              ghLink="https://github.com/jdtheefirst/World-Samma-Fed"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat_room} // Placeholder image or a coming soon image
              isBlog={false}
              title="Chat Room"
              description="Chat Room or Workspace to share resources and hangout with friends build with React.js, Material-UI, and Firebase."
              demoLink="https://chat-room-ecru-five.vercel.app"
              ghLink="https://github.com/jdtheefirst/Porfolio"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aora} // Placeholder image or a coming soon image
              isBlog={false}
              title="Aora - Mobile App"
              description="Built with React Native for seamless user experiences, Animatable for captivating animations, and integrated with the dependable backend systems of Appwrite, this app showcases impressive design and functionality, enabling seamless sharing of videos within the community."
              demoLink="https://github.com/jdtheefirst/aora?tab=readme-ov-file"
              ghLink="https://github.com/jdtheefirst/aora"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Healthcare} // Placeholder image or a coming soon image
              isBlog={false}
              title="Healthcare Management System"
              description="A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js."
              demoLink="https://healthcare-theta-sand.vercel.app/"
              ghLink="https://github.com/jdtheefirst/healthcare"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce} // Placeholder image or a coming soon image
              isBlog={false}
              title="E-Commerce"
              description="Users can browse products, add them to their cart, and complete purchases securely. The application features user authentication, product management, and order processing. Leveraging GraphQL for efficient data fetching, it connects to the Saleor cloud for dynamic content and scalability."
              demoLink="https://e-commerce-swart-mu-68.vercel.app/"
              ghLink="https://github.com/jdtheefirst/e-commerce"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
