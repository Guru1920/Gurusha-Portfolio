import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gurusha Rahul </span>
            from <span className="purple"> Jhansi Uttar Pradesh, India.</span>
            <br />I am a junior pursuing B.tech in Information Technology From Indian Institute of Engineering Science and Technology, Shibpur
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I Wanted to  make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gurusha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
