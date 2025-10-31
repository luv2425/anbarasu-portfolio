import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blogImg from "../../Assets/Projects/blog.png";
import chatifyImg from "../../Assets/Projects/chatify.png";
import editorImg from "../../Assets/Projects/codeEditor.png";
import leafImg from "../../Assets/Projects/leaf.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">Recent <strong className="purple">Projects</strong></h1>
        <p style={{ color: "white" }}>A selection of my work.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatifyImg}
              isBlog={false}
              title="Dutyrun"
              description="Duty management web app built with React/Next.js, integrating REST APIs and role-based access; deployed via Vercel with CI/CD using GitHub Actions."
              ghLink="https://github.com/luv2425"
              demoLink="https://dutyrun.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogImg}
              isBlog={false}
              title="Portfolio Website"
              description="Responsive personal portfolio using React, modern CSS and component-driven UI; deployed on Vercel with automated workflows."
              ghLink="https://github.com/luv2425"
              demoLink="https://abu-portfolio-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editorImg}
              isBlog={false}
              title="n8n Automation Workflows"
              description="Automated workflows in n8n for email handling and data sync using APIs, webhooks and JS functions; accelerated operations with Python scripting."
              ghLink="https://github.com/luv2425"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leafImg}
              isBlog={false}
              title="To-Do Application"
              description="CRUD productivity app with React, demonstrating component state management, accessibility and responsive UI patterns; API-ready design."
              ghLink="https://github.com/luv2425"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
