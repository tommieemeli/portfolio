import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Me from "../img/me.jpg";
import "./About.css";

export default function About() {
  return (
    <div>
      <Container className="hederi">
        <Row>
          <Col>
            <h1>I'm Tommi Haapa</h1>
            <h4>
              I'm Espoo based becoming full-stack developer. Here you will find
              all necessery information and little more about me.
            </h4>
          </Col>
        </Row>
        <Row>
          <Col className="icons">
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-twitch"></i>
          </Col>
        </Row>
      </Container>
      <Container className="inffot">
        <Row>
          <Col className="kuva-col">
            <img className="kuva" src={Me} />
          </Col>
          <Col className="info-col">
            <h2>ME</h2>
            <h4>
              I am 24 years old third year IT student at Laurea University of
              Applied Sciences.
            </h4>
            <h4>
              My major is web development, more specificly Full-stack
              development.
            </h4>
            <br />
            <h2>CONTACT</h2>
            <h4>Tommi Haapa</h4>
            <h4>Puhujanpolku 1B 16</h4>
            <h4>02650 Leppävaara, Espoo, Finland</h4>
            <h4>tommi-haapa@hotmail.com</h4>
            <br />
            <h2>HOBBIES</h2>
            <h4>
              Im true gamer, i have played Counter Strike since CS 1.6, and
              still going strong. I played Spyro when PlayStation 1 was
              released, and kept playing PlayStation throught my youth. I got my
              first gaming pc when i was 10 years old, and computers have been
              my passion ever since.
            </h4>

            <h4>
              I play a lot of other games too, usually fps, battle royale or
              strategic games ex. Team Fight Tactics. If you're interested about
              my gaming videos, you'll find my Youtube and Twitch link above!
            </h4>
            <h4>
              I also skate, freestyle ski and drive motorcycle. I love gas
              engines and power.
            </h4>
            <h4>
              I love nature, i like to photograph wild animals and like to hike.
              I've been on Sissi RUK <b>KEHRÄ 248</b> and i've done SERE
              practise. (Survival, Evasion, Resistance and Escape)
            </h4>
          </Col>
          <Col className="info-col1">
            <h2>FRONTEND</h2>
            <h4>
              React <b>/</b> React Native <b>/</b> Pug
            </h4>
            <br />
            <h2>BACKEND</h2>
            <h4>Node.js</h4>
            <h4>Express</h4>
            <br />
            <h2>DATABASE</h2>
            <h4>
              MongoDB <b>/</b> MySQL <b>/</b> postreSQL <b>/</b> firebase
            </h4>
            <br />
            <h2>LANGUAGES</h2>
            <h4>
              JavaScript <b>/</b> TypeScript <b>/</b> C# <b>/</b> C++ <b>/</b>{" "}
              HTML and CSS
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
