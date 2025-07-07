import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
// import headerImg from "../assets/pic.png"
import headerImg from "../assets/pic-removebg-preview.png"
import 'animate.css/animate.min.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [text, setText] = useState('Full Stack Developer');
  // No animation needed, just highlight the role
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7} className="banner-text-col">
            <h1 className="banner-title">
              <span className="my-name">Habeeb Saleh</span>
              <br />
              <span className="dev-type-animated focus-role">{text}<span className="dev-type-underline" /></span>
            </h1>
            <p className="banner-desc">Building robust, scalable, and beautiful web applications from front-end to back-end. Passionate about delivering seamless digital experiences.</p>
            <a
              href="https://drive.google.com/file/d/1PfWwau08h979G5vzQtQ4-lQJT_4x3PPw/view?usp=sharing"
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Col>
          <Col xs={12} md={5} xl={5} className="banner-img-col ">
            <img src={headerImg} alt="header img" className="banner-img " />
          </Col>
        </Row>
      </Container>
    </section>
  )
}