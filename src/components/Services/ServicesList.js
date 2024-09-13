import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <Container fluid className={styles.servicesSection} id="services">
      <Container>
        <Row className={styles.servicesRow}>
          <Col md={4} className={styles.serviceItem} data-aos="fade-up">
            <div className={styles.serviceFlipCard}>
              <div className={styles.serviceFlipInner}>
                <div className={`${styles.serviceFront} ${styles.serviceBg1}`}>
                  <h2>Web Development</h2>
                </div>
                <div className={`${styles.serviceBack} ${styles.serviceBg1Back}`}>
                  <h2>Web Development</h2>
                  <ul>
                    <li>Front-end Development</li>
                    <li>Back-end Development</li>
                    <li>Responsive Design</li>
                    <li>Custom Solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className={styles.serviceItem} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.serviceFlipCard}>
              <div className={styles.serviceFlipInner}>
                <div className={`${styles.serviceFront} ${styles.serviceBg2}`}>
                  <h2>Bot Creation</h2>
                </div>
                <div className={`${styles.serviceBack} ${styles.serviceBg2Back}`}>
                  <h2>Bot Creation</h2>
                  <ul>
                    <li>Chatbots</li>
                    <li>Task Automation</li>
                    <li>AI Integration</li>
                    <li>Customer Support Bots</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className={styles.serviceItem} data-aos="fade-up" data-aos-delay="200">
            <div className={styles.serviceFlipCard}>
              <div className={styles.serviceFlipInner}>
                <div className={`${styles.serviceFront} ${styles.serviceBg3}`}>
                  <h2>Data Analytics</h2>
                </div>
                <div className={`${styles.serviceBack} ${styles.serviceBg3Back}`}>
                  <h2>Data Analytics</h2>
                  <ul>
                    <li>Data Visualization</li>
                    <li>Predictive Analytics</li>
                    <li>Data Mining</li>
                    <li>Business Intelligence</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className={styles.serviceItem} data-aos="fade-up" data-aos-delay="300">
            <div className={styles.serviceFlipCard}>
              <div className={styles.serviceFlipInner}>
                <div className={`${styles.serviceFront} ${styles.serviceBg4}`}>
                  <h2>API Integration</h2>
                </div>
                <div className={`${styles.serviceBack} ${styles.serviceBg4Back}`}>
                  <h2>API Integration</h2>
                  <ul>
                    <li>Custom API Integration</li>
                    <li>Third-Party Services</li>
                    <li>RESTful APIs</li>
                    <li>Webhooks</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className={styles.serviceItem} data-aos="fade-up" data-aos-delay="400">
            <div className={styles.serviceFlipCard}>
              <div className={styles.serviceFlipInner}>
                <div className={`${styles.serviceFront} ${styles.serviceBg5}`}>
                  <h2>UI/UX Design</h2>
                </div>
                <div className={`${styles.serviceBack} ${styles.serviceBg5Back}`}>
                  <h2>UI/UX Design</h2>
                  <ul>
                    <li>User Research</li>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>UI Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className={styles.serviceItem} data-aos="fade-up" data-aos-delay="500">
            <div className={styles.serviceFlipCard}>
              <div className={styles.serviceFlipInner}>
                <div className={`${styles.serviceFront} ${styles.serviceBg6}`}>
                  <h2>Consulting</h2>
                </div>
                <div className={`${styles.serviceBack} ${styles.serviceBg6Back}`}>
                  <h2>Consulting</h2>
                  <ul>
                    <li>Project Management</li>
                    <li>Technology Strategy</li>
                    <li>Process Optimization</li>
                    <li>Risk Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Services;