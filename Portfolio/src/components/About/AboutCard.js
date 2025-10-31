import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="purple">ANBARASU</span>, a passionate Web Designer and
            Developer with experience in creating visually appealing and
            functional websites. I specialize in <span className="purple">HTML, CSS, JavaScript</span>,
            and the <span className="purple">React</span> framework. I’m committed to delivering
            clean, responsive designs that provide a seamless user experience.
            <br />
            <br />
            <span className="purple">Email</span>: anburam567@gmail.com
            <br />
            <span className="purple">Contact</span>: 6374343174
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Design clean. Build responsive. Ship reliable."
          </p>
          <footer className="blockquote-footer">ANBARASU</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;