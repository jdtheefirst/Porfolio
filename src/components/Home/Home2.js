import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { SiLichess } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Ah, the mesmerizing world of coding! 🌟 It was love at first byte,
              and with each line of code, I uncover new possibilities, pushing
              the boundaries of what's possible, one algorithm at a time. 💻
              <br />
              <br />
              My linguistic prowess extends to the classics:
              <i>
                <b className="purple"> C++, JavaScript, and Python. </b>
              </i>
              These languages are not just tools; they're the building blocks of
              digital dreams, the architects of tomorrow's innovations. ✨
              <br />
              <br />
              But my interests don't stop there. I'm drawn to the infinite
              possibilities of
              <i>
                <b className="purple"> Web Technologies and Products</b>
              </i>
              , sculpting digital landscapes that captivate and inspire. And
              when I'm not immersed in the virtual world, you'll find me
              exploring the tantalizing depths of
              <i>
                <b className="purple"> Electronics</b>
              </i>
              , where circuits come alive with the pulse of innovation. ⚡
              <br />
              <br />
              Fuelled by passion and fueled by caffeine, I embark on the quest
              to bring ideas to life. With
              <b className="purple"> Node.js</b> as my trusty steed, I traverse
              the digital frontier, wielding the powers of
              <i>
                <b className="purple">
                  {" "}
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              &nbsp;such as
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              . Together, we craft experiences that defy expectations, breathing
              life into pixels and turning dreams into reality. 🚀
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jdtheefirst"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/jdtheefirst"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joseph-ngatia-99b632232/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jdtheefirst/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://lichess.org/@/jdtheefirst"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLichess />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
