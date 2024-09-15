import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import { motion } from "framer-motion";
import lbc from '../assets/autoservislogo.png';
import './Projects.css'; // Подключение кастомных стилей

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <motion.h1
          className="project-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <strong className="yellow">Works </strong>
        </motion.h1>

        <motion.p
          style={{ color: "white" }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Our latest project
        </motion.p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ProjectCard
                imgPath={lbc}
                isBlog={false}
                title="AutoSerwis"
                description="Website for AutoSerwis"
                ghLink="https://lp1375.github.io/AutoSerwis/"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;