import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import styles from "./About.module.css";

const About = () => {
    return (
        <Container fluid className={styles.homeAboutSection} id="about">
          <Container>
            <Row>
              <Col md={8} className={styles.homeAboutDescription}>
                <h1>Welcome to <span className={styles.yellow}>Sitelab</span>!</h1>
                <p className={styles.homeAboutBody}>
                  We are a dynamic team dedicated to crafting exceptional digital experiences. Our expertise spans across a wide range of services, including web development, intelligent bot creation, and data analytics.
                  <br />
                  <br />
                  Our team is proficient in <b className={styles.yellow}>JavaScript</b> and has extensive experience with <b className={styles.yellow}>React.js</b> and <b className={styles.yellow}>MySQL</b>. We are also skilled in various modern libraries and frameworks, ensuring we deliver cutting-edge solutions.
                  <br />
                  <br />
                  At Sitelab, we are passionate about <i><b className={styles.yellow}>building innovative web technologies and products</b></i>, and exploring new frontiers in <b className={styles.yellow}>AI</b>.
                </p>
              </Col>
              <Col md={4} className={styles.myAvatar}>
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="team illustration" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className={styles.homeAboutSocial}>
                <h1>Connect with us</h1>
                <ul className={styles.homeAboutSocialLinks}>
                  <li className={styles.socialIcons}>
                    <a
                      href="https://github.com/SitelabTeam"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.homeSocialIcons}
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className={styles.socialIcons}>
                    <a
                      href="https://www.linkedin.com/company/sitelab"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.homeSocialIcons}
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className={styles.socialIcons}>
                    <a
                      href="https://leetcode.com/sitelab"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.homeSocialIcons}
                      aria-label="leetcode"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
    );
}

export default About;
