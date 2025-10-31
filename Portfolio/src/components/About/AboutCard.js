import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="purple">ANBARASU GOVINDHASAMY</span>, a
            <span className="purple"> Jr. Web Developer</span> adapted to AI-assisted
            workflows. I build and deploy web applications using
            <span className="purple"> HTML5, CSS3, JavaScript/TypeScript, React</span> and
            <span className="purple"> Next.js</span>, with experience in API integration,
            basic automation with <span className="purple">Python (n8n)</span>, and CI/CD via
            <span className="purple"> GitHub Actions</span> and <span className="purple">Vercel</span>.
            I’m comfortable across <span className="purple">AWS (EC2, Lambda, S3)</span>,
            relational databases (<span className="purple">MySQL, PostgreSQL, SQL Server</span>),
            and Linux/Windows environments. I enjoy collaborating in Agile teams and
            creating efficient, user-focused web solutions.
            <br />
            <br />
            <span className="purple">Email</span>: anbarasuram678@gmail.com
            <br />
            <span className="purple">Mobile</span>: +91 6374343174
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Automating workflows with n8n ⚙️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build responsive, automate the routine, ship continuously."
          </p>
          <footer className="blockquote-footer">ANBARASU</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;