import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import remed from "../../Assets/Projects/remed.png";
import step from "../../Assets/Projects/stepfunction_success.png";
import food from "../../Assets/Projects/food.png";
import sales from "../../Assets/Projects/sales.png";
import speed from "../../Assets/Projects/speed.png";
import football from "../../Assets/Projects/football.png";
import churn from "../../Assets/Projects/churn.png";
import call from "../../Assets/Projects/call.png";

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
              imgPath={churn}
              isBlog={false}
              title="Customer Churn Analysis at PhoneNow"
              description="In this project I perform customer churn risk analysis for the company PhoneNow as part of PWC Power BI virtual internship. I identify the key performance metrics, explore the customer profiles and lastly perform risk analysis to be able to make informed business decisions that I can share with the risk management team."
              // ghLink=""
              demoLink="https://app.powerbi.com/reportEmbed?reportId=e64da733-6a0e-4690-a64f-28d94eade3c1&autoAuth=true&ctid=ef8cc863-2140-41be-b7c5-436495915dbe"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={call}
              isBlog={false}
              title="Call Center Analysis"
              description="In this project I identify various key performance metrics at call centers in order to optimize operations i.e. customer satisfaction, agent hold time etc."
              demoLink="https://app.powerbi.com/reportEmbed?reportId=bf0c7fd0-b344-4659-8d8f-e769bdc6ebb2&autoAuth=true&ctid=ef8cc863-2140-41be-b7c5-436495915dbe"
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
              imgPath={remed}
              isBlog={false}
              title="RemeD Mobile"
              description="This is a mobile application built with react native whose main objective is was to create a platform for patience to have doctor's consultation virtually during the COVID Pandemic. It mainly focuses on patients with chronic diseases"
              ghLink="https://github.com/Olympiah/remed_mobile.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="FooD App"
              description="This is a mobile app built using react native,expo and firebase as the database. I took inspiration from the uber eats app. It showcases my front-end development skills."
              ghLink="https://github.com/Olympiah/FOODAPP.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={step}
              isBlog={false}
              title="An ML Workflow on AWS SageMaker"
              description="This project  utilizes the AWS services to train a model, deploy a model, and also AWS Lambda Functions, Step Functions to compose your model and services into an event-driven application"
              ghLink="https://github.com/Olympiah/Image-Classification-model.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
