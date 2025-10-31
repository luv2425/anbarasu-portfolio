import React from "react";
import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import NextIcon from "../../Assets/TechIcons/Next.svg";
import PythonIcon from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import SqlIcon from "../../Assets/TechIcons/SQL.svg";
import MongoIcon from "../../Assets/TechIcons/Mongo.svg";
import AwsIcon from "../../Assets/TechIcons/AWS.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={NextIcon} alt="next" />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PythonIcon} alt="python" />
        <div className="tech-icons-text">Python 3.x</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SqlIcon} alt="sql" />
        <div className="tech-icons-text">SQL (MySQL/PostgreSQL/SQL Server)</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MongoIcon} alt="mongodb" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AwsIcon} alt="aws" />
        <div className="tech-icons-text">AWS (EC2/Lambda/S3)</div>
      </Col>
    </Row>
  );
}

export default Techstack;
