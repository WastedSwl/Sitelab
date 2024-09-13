import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiMaterialui,
  SiRedux,
  SiPostgresql,
  SiTypescript,
  SiJest
} from "react-icons/si";
import {
  FaGithub,
  FaGitlab,
  FaDocker,
  FaGit
} from "react-icons/fa";
import styles from "./Techstack.module.css";

const Techstack = () => {
  return (
    <div className={styles.techstackContainer}>
      <div className={styles.techCategories}>
        <h2>Frontend</h2>
        <Row className={styles.rowStyle}>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="HTML5">
                  <SiHtml5 />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>HTML5</h4>
                <p className={styles.techDescription}>Markup language for creating web pages.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="CSS3">
                  <SiCss3 />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>CSS3</h4>
                <p className={styles.techDescription}>Style sheet language used for describing the presentation of a document.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="JavaScript">
                  <DiJavascript1 />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>JavaScript</h4>
                <p className={styles.techDescription}>Programming language for creating interactive effects on web pages.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="React">
                  <DiReact />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>React</h4>
                <p className={styles.techDescription}>JavaScript library for building user interfaces.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="Redux">
                  <SiRedux />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>Redux</h4>
                <p className={styles.techDescription}>State management library for JavaScript applications.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="Sass">
                  <SiSass />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>Sass</h4>
                <p className={styles.techDescription}>CSS preprocessor that makes writing CSS easier.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="Bootstrap">
                  <SiBootstrap />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>Bootstrap</h4>
                <p className={styles.techDescription}>Front-end framework for designing responsive websites.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="Material UI">
                  <SiMaterialui />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>Material UI</h4>
                <p className={styles.techDescription}>React components that implement Google's Material Design.</p>
              </div>
            </div>
          </Col>

          {/* Backend Technologies */}
          <h2>Backend</h2>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="Node.js">
                  <DiNodejs />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>Node.js</h4>
                <p className={styles.techDescription}>JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="MongoDB">
                  <DiMongodb />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>MongoDB</h4>
                <p className={styles.techDescription}>Document-oriented NoSQL database used for high volume data storage.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="Python">
                  <DiPython />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>Python</h4>
                <p className={styles.techDescription}>High-level programming language known for its readability and versatility.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="PostgreSQL">
                  <SiPostgresql />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>PostgreSQL</h4>
                <p className={styles.techDescription}>Open-source relational database management system emphasizing extensibility.</p>
              </div>
            </div>
          </Col>

          {/* Tools & Libraries */}
          <h2>Tools & Libraries</h2>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="TypeScript">
                  <SiTypescript />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>TypeScript</h4>
                <p className={styles.techDescription}>Superset of JavaScript that adds static types.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="Jest">
                  <SiJest />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>Jest</h4>
                <p className={styles.techDescription}>JavaScript testing framework with a focus on simplicity.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="Docker">
                  <FaDocker />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>Docker</h4>
                <p className={styles.techDescription}>Platform for developing, shipping, and running applications in containers.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="Git">
                  <FaGit />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>Git</h4>
                <p className={styles.techDescription}>Version control system for tracking changes in source code.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} lg={2} className={styles.techCard}>
            <div className={styles.techInner}>
              <div className={styles.techFront}>
                <div className={styles.techIcon} title="GitHub">
                  <FaGithub />
                </div>
              </div>
              <div className={styles.techBack}>
                <h4 className={styles.techTitle}>GitHub</h4>
                <p className={styles.techDescription}>Platform for hosting and collaborating on Git repositories.</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Techstack;