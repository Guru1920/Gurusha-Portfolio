import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import khet from "../../Assets/Projects/khet.png";
import siman from "../../Assets/Projects/siman.png";
import drum from "../../Assets/Projects/drum.png";
import dice from "../../Assets/Projects/dice.png";
import dog from "../../Assets/Projects/dog.png";
import gmail from "../../Assets/Projects/gmail.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={khet}
              isBlog={false}
              title="Khet"
              description="This website is delicated to farmers in which I provide actionable weather forecasts - weekly, village-level forecasts paired with specific advisories for groundnut farmers, especially critical for farmers in dryland areas.. lot more imformation usefull for farmers"
              link="https://guru1920.github.io/khet/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={siman}
              isBlog={false}
              title="Siman-Game"
              description="There are four coloured buttons, each producing a particular tone when it is pressed or activated by the device. A round in the game consists of the device lighting up one random button. after which the player must reproduce that order by pressing the buttons."
              link="https://guru1920.github.io/Siman-Game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drum}
              isBlog={false}
              title="Drum Kit"
              description="So the way this website would work that we’ve got a number of keys on the webpage that represents different drums in a typical drum set and when you click on any of those buttons then you’ll get the corresponding sound of the drum. The main concepts presented in the project are DOM, key events and CSS animations."
              link="https://guru1920.github.io/Drum-Kit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dice}
              isBlog={false}
              title="Dicee Challenge"
              description="Its a simple dice game created using JavaScript, html and CSS. The Dice Game is based on a two-player. Both players roll the dice and the player who gets the highest phase value will win the game."
              link="https://guru1920.github.io/Dicee-Challenge/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dog}
              isBlog={false}
              title="TinDog"
              description="The practice of building a website suitable to work on every device and every screen size, no matter how large or small, mobile or desktop. It is a principal that focuses on optimizing a website so that it is flexible, adaptive and provides superior user experience. Responsive design allows your website content to flow freely across all screen resolutions and sizes, and renders it to look great on all devices."
              link="https://guru1920.github.io/TinDog/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmail}
              isBlog={false}
              title="spam classifier gmail"
              description="No matter how long you’ve been using Gmail, you’ll have come across Gmail spam at some point. Despite their best efforts, some messages always make it through the sophisticated spam blocking processes  it checks the email of the sender against Gmail’s database of blacklisted domains.

If the email passes that , Gmail will then check any links against its database of known malicious links and compare them to links in the incoming email.."
              link="https://github.com/Guru1920/Gmail-classifier"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
