import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import sales from "../../Assets/Projects/sales.png";
import speed from "../../Assets/Projects/speed.png";
import suicide from "../../Assets/Projects/suicide.png";
import football from "../../Assets/Projects/football.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speed}
              isBlog={false}
              title="EyeSpeeD"
              description=" Real-Time Vehicle Speed Estimation System that utilizes Object Detection and Tracking."
              ghLink="https://github.com/Olympiah/Need4Speed.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={football}
              isBlog={false}
              title="English Premier League Analysis"
              description="In this project I perform exploratory/descriptive analysis on football teams in the EPL with foucs on Man United statistics"
              // ghLink=""
              demoLink="https://app.powerbi.com/reportEmbed?reportId=9885812d-31d6-4a5e-acb1-cbe3d5fd864b&autoAuth=true&ctid=ef8cc863-2140-41be-b7c5-436495915dbe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="Company Sales Visualization"
              description="This is a project that showcases my analysis and visualization skills using POWER BI. I used SQL workbench as my data source and created interractive dashboards  "
              // ghLink=""
              demoLink="https://app.powerbi.com/reportEmbed?reportId=82ea9e15-3d40-49f9-a3f8-a7bd44916658&autoAuth=true&ctid=ef8cc863-2140-41be-b7c5-436495915dbe"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="RemeD Mobile"
              description="This is a mobile application built with react native whose main objective is was to create a platform for patience to have doctor's consultation virtually during the COVID Pandemic. It mainly focuses on patients with chronic diseases"
              ghLink="https://github.com/Olympiah/remed_mobile.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="FooD App"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title="F"
              description="T"
              ghLink=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;