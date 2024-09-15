import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import styles from "./Projects.module.css"; 

const ProjectCard = (props) => {
  return (
    <Card className={styles.projectCardView}>
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className={styles.cardImg}
      />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>{props.title}</Card.Title>
        <Card.Text className={styles.cardText}>
          {props.description}
        </Card.Text>
        <Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          className={styles.button}
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className={`${styles.button} ${styles.buttonMarginTop}`}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
