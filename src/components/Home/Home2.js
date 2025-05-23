import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/jdtheefirst.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaUpwork, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { SiLichess } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              HOW <span className="purple"> CODING </span> STARTED
            </h1>
            <p className="home-about-body">
              My journey began with a goal to reach and impact as many people as
              possible.
              <br />
              <br />I started by selling products online as an affiliate using
              marketplaces like <b className="purple"> ClickBank, Amazon</b>,
              and <b className="purple">Alibaba</b>, creating landing pages with
              builders like <b className="purple"> WordPress </b> and
              advertising on social platforms and search engines. The
              limitations of these builders led me to coding.
              <br />
              <br />
              My linguistic prowess being:
              <i>
                <b className="purple"> JavaScript </b>
              </i>
              <br />
              This language is not just a tool; it is the building block of
              digital dreams, the architects of tomorrow's innovations. ✨
              <br />
              <br />
              But my interests don't stop there. I'm drawn to the infinite
              possibilities of
              <i>
                <b className="purple"> Mobile & Web Technologies</b>
              </i>
              , sculpting digital landscapes that captivate and inspire. And
              when I'm not immersed in the virtual world, you'll find me
              exploring the tantalizing depths of
              <i>
                <b className="purple"> Electronics</b>
              </i>
              , where circuits come alive with every pulse of innovation. ⚡
              <br />
              <br />
              Fueled by passion and caffeine, I embark on the quest to bring
              ideas to life. With
              <b className="purple"> NodeJS and Typescript</b> as my trusty
              steed, I traverse the digital frontier, wielding the powers of
              <i>
                <b className="purple">
                  {" "}
                  Modern JavaScript Libraries and Frameworks{" "}
                </b>
              </i>
              such as
              <i>
                <b className="purple"> ReactJS, React Native and NextJS</b>
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
                  href="https://upwork.com/freelancers/jdtheefirst"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaUpwork />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/jdtheefirst"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/jdtheefirst"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joseph-ngatia-99b632232/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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
                  href="https://wa.me/254113062599"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://lichess.org/@/jdtheefirst"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLichess />
                </a>
              </li>
            </ul>
            <p>
              <span className="purple"> Call | Text </span>
              &nbsp;+254113062599 <span className="purple"> Or </span>
              +254789377418
            </p>
            <p>
              <span className="purple"> Email </span>&nbsp;jngatia045@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
