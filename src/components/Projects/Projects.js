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
              description="A comprehensive duty management app for task assignments, tracking, and collaborative workflows. Real-time updates, RBAC, deadlines, and team tools."
              ghLink="https://github.com/luv2425"
              demoLink="https://dutyrun.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogImg}
              isBlog={false}
              title="Portfolio Website"
              description="Personal portfolio site with clean, responsive layout, smooth scrolling, and micro-interactions to highlight skills and projects."
              ghLink="https://github.com/luv2425"
              demoLink="https://abu-portfolio-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editorImg}
              isBlog={false}
              title="n8n Automation Workflows"
              description="Automated workflows for email responses and data sync using n8n, APIs, webhooks, and JS functions. Focus on low-code automation and integrations."
              ghLink="https://github.com/luv2425"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leafImg}
              isBlog={false}
              title="To-Do Application"
              description="CRUD productivity app with intuitive state management, component-driven UI, accessibility, and responsive patterns."
              ghLink="https://github.com/luv2425"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
