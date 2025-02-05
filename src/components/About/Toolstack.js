import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman, SiSlack, SiVercel, SiMacos } from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { CiDroplet } from "react-icons/ci";
import { FaUbuntu } from "react-icons/fa6";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CiDroplet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUbuntu />
      </Col>
    </Row>
  );
}

export default Toolstack;
