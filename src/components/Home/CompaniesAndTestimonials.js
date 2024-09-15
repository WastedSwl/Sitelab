import React, { useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
import Particle from "../Particle";
import styles from "./CompaniesAndTestimonials.module.css";
import companyLogo1 from "../../assets/Hoffman.jpg";
import companyLogo2 from "../../assets/warsaw.jpg";
import companyLogo3 from "../../assets/autohouse.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarModel from './car';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CompaniesAndTestimonials = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // Управление состоянием модального окна
  const sliderRef = useRef(null);

  const companySliderSettings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleMouseEnter = () => {
    sliderRef.current.slickPause();
  };

  const handleMouseLeave = () => {
    sliderRef.current.slickPlay();
  };

  const openModal = () => {
    console.log("Modal open button clicked");
    setModalIsOpen(true); // Открытие модального окна
  };

  const closeModal = () => {
    console.log("Modal close button clicked");
    setModalIsOpen(false); // Закрытие модального окна
  };

  return (
    <section className={styles.companiesTestimonialsSection}>
      <Particle />

      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h2 className={styles.sectionTitle}>
              Partners and Clients We Trust
            </h2>
            <p className={styles.sectionSubtitle}>
              We’ve had the pleasure of collaborating with innovative and
              industry-leading companies.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Slider
            {...companySliderSettings}
            className={styles.companySlider}
            ref={sliderRef}
          >
            <div
              className={styles.companyLogo}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={companyLogo1} alt="Company 1" className="img-fluid" />
              <div className={styles.overlay}>
                <div className={`${styles.companyName} ${styles.blackText}`}>
                  Autohaus Hoffmann
                </div>
              </div>
            </div>
            <div
              className={styles.companyLogo}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={companyLogo2} alt="Company 2" className="img-fluid" />
              <div className={styles.overlay}>
                <div className={styles.companyName}>Warsztat Auto</div>
              </div>
            </div>
            <div
              className={styles.companyLogo}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={companyLogo3} alt="Company 3" className="img-fluid" />
              <div className={styles.overlay}>
                <div className={styles.companyName}>
                  Autohaus Krebs Dresden
                </div>
              </div>
            </div>
          </Slider>
        </Row>

        <Row>
          <Col md={12} className="text-center">
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <p className={styles.sectionSubtitle}>
              Hear from those who have worked with us.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={4} className={`${styles.testimonialCard} ${styles.fadeIn}`}>
            <blockquote>
              "Working with Sitelab exceeded all our expectations. Their automation solutions significantly reduced our operational time."
            </blockquote>
            <p>- Stefan Müller, Fleet Manager</p>
          </Col>
          <Col md={4} className={`${styles.testimonialCard} ${styles.fadeIn}`}>
            <blockquote>
              "Sitelab's IT expertise helped us revamp our internal systems. We now have a more efficient workflow and seamless communication across departments."
            </blockquote>
            <p>- Piotr Nowak, Business Owner</p>
          </Col>
          <Col md={4} className={`${styles.testimonialCard} ${styles.fadeIn}`}>
            <blockquote>
              "The team at Sitelab delivered a custom solution that transformed our online presence. Our sales have improved, and customer engagement has doubled."
            </blockquote>
            <p>- Hans Schreiber, Sales Executive</p>
          </Col>
        </Row>

        {/* 3D Model Section */}
        {/* <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <h2 className={styles.sectionTitle}>Explore Our 3D Car Model</h2>
            <div className={styles.carModelContainer}>
              <CarModel />
           
            </div>
          </Col>
        </Row> */}
      </Container>

      {/* Modal for Car Model */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="3D Car Model"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <button onClick={closeModal} className={styles.closeButton}>Close</button>
        <CarModel />
      </Modal>
    </section>
  );
};

export default CompaniesAndTestimonials;