import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle';
import ServicesList from "../components/Services/ServicesList"; // Импортируем компонент для списка услуг

const Services = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our <strong className="yellow">Services</strong>
        </h1>
        <ServicesList />
      </Container>
    </Container>
  );
}

export default Services;