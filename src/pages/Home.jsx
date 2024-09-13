import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png';
import Particle from '../components/Particle';
import About from '../components/Home/About';

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
    </section>
  );
}

export default Home;