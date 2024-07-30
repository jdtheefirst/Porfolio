import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>80%</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>86%</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>60%</p>
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
        <SiPostgresql />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>70%</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "20px", padding: 0, margin: 0 }}>60%</p>
      </Col>
    </Row>
  );
}

export default Techstack;
