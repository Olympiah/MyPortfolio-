import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myavatar from '../../Assets/myavatar.png'
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
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
              My Interest with computers started at a very young age but I have grown a lot since
              High School and I believe I have learnt just enough to serve as a stepping stone in my career..
              <br />
              <br />I am good in programming languages such as
              <i>
                <b className="purple"> Javascript, SQL and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest are building new &nbsp;
              <i>
                <b className="purple"> Web Technologies as well as Mobile apps</b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Computer Vision.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing software
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and React Native</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <Avatar
                avatarStyle='Transparent'
                topType='LongHairFro'
                accessoriesType='Blank'
                hairColor='Black'
                facialHairType='Blank'
                clotheType='ShirtScoopNeck'
                clotheColor='PastelOrange'
                eyeType='Happy'
                eyebrowType='Default'
                mouthType='Default'
                skinColor='DarkBrown'
              /> */}
              <img src={myavatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple"> connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Olympiah"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/olympiah-otieno/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
