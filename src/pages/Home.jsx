import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png';
import Particle from '../components/Particle';
import About from '../components/Home/About';
import CompaniesAndTestimonials from '../components/Home/CompaniesAndTestimonials';
import CryptoPrices from '../components/Home/CryptoPrices'; 
import ContactForm from '../components/Home/ContactForm';
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import styles from "../components/Home/About.module.css";


const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                We are <strong className="main-name">Sitelab</strong>
              </h1>

              <div style={{ padding: 45, textAlign: "left" }}>
                <h1 className="heading-name">
                  Your partners in crafting <strong className="main-name">innovative solutions</strong>
                </h1>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <CompaniesAndTestimonials/>
      {/* <CryptoPrices /> */}
      {/* <Row>
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
            </Row> */}
      <ContactForm />
    </section>
  );
}

export default Home;