import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { FaDocker } from "react-icons/fa6";
import { SiFirebase, SiNextdotjs, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>86%</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>70%</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>86%</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>86%</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>86%</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>86%</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>80%</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>85%</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>70%</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>60%</p>
      </Col>
    </Row>
  );
}

export default Techstack;
