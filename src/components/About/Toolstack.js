import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiAmazonaws,
  SiMysql
} from "react-icons/si";

import {DiGit} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit/>
      </Col>
    </Row>
  );
}

export default Toolstack;
