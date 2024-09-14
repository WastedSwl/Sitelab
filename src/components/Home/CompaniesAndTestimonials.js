import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Slider from "react-slick";
import styles from "./CompaniesAndTestimonials.module.css";
import companyLogo1 from "../../assets/Bot.jpg";
import companyLogo2 from "../../assets/Bot.jpg";
import companyLogo3 from "../../assets/Bot.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompaniesAndTestimonials = () => {
  // Настройки для слайдера компаний
  const companySliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000, // Плавная анимация
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    autoplay: true, // Включаем автопрокрутку
    autoplaySpeed: 5000, // Медленная автопрокрутка (5 секунд на каждый слайд)
    pauseOnHover: true, // Останавливать карусель при наведении мыши
    swipeToSlide: true, // Возможность свайпа
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Настройки для слайдера отзывов
  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 800, // Более плавная анимация
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Оставляем только точки навигации
    autoplay: true,
    autoplaySpeed: 5000,
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
              We’ve had the pleasure of collaborating with innovative and industry-leading companies.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Slider {...companySliderSettings} className={styles.companySlider}>
            <div className={styles.companyLogo}>
              <img src={companyLogo1} alt="Company 1" className="img-fluid" />
              <div className={styles.overlay}>
                <div className={styles.companyName}>Innovate Inc.</div>
              </div>
            </div>
            <div className={styles.companyLogo}>
              <img src={companyLogo2} alt="Company 2" className="img-fluid" />
              <div className={styles.overlay}>
                <div className={styles.companyName}>TechSphere</div>
              </div>
            </div>
            <div className={styles.companyLogo}>
              <img src={companyLogo3} alt="Company 3" className="img-fluid" />
              <div className={styles.overlay}>
                <div className={styles.companyName}>Future Solutions</div>
              </div>
            </div>
          </Slider>
        </Row>

        {/* Раздел с отзывами */}
        <Row>
          <Col md={12} className="text-center">
            <p className={styles.sectionSubtitle}>
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="text-center">
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <p className={styles.sectionSubtitle}>
              Hear from those who have worked with us.
            </p>
          </Col>
        </Row>

        {/* Статичные отзывы */}
        <Row className="justify-content-center">
          <Col md={4} className={styles.testimonialCard}>
            <blockquote>
              "Working with this team was a game-changer for our business. Their solutions are both cutting-edge and practical."
            </blockquote>
            <p>- John Doe, CEO of Innovate Inc.</p>
          </Col>
          <Col md={4} className={styles.testimonialCard}>
            <blockquote>
              "Their professionalism and expertise helped us to transform our approach to AI and web development."
            </blockquote>
            <p>- Jane Smith, CTO of TechSphere</p>
          </Col>
          <Col md={4} className={styles.testimonialCard}>
            <blockquote>
              "Highly recommend their team for any business looking to elevate its digital presence."
            </blockquote>
            <p>- Mike Johnson, Founder of Future Solutions</p>
          </Col>
        </Row>

        {/* Кнопка оставить отзыв */}
        <Row className="text-center">
          <Col>
            <Button className={styles.leaveReviewButton} onClick={() => alert('Opening review form...')}>
              Leave a Review
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CompaniesAndTestimonials;