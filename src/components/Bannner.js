import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/profile.png"
import 'animate.css/animate.min.css';

export const Banner = () => {
  const text = 'Full Stack Developer';
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
              href="https://drive.google.com/file/d/1GVk6sgaf5KJgYvi_7aKwweMJXC85IFN2/view?usp=sharing"
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Col>
          <Col xs={12} md={5} xl={5} className="banner-img-col ">
            <img src={headerImg} alt="Habeeb Saleh, Full Stack Developer" className="banner-img " />
          </Col>
        </Row>
      </Container>
    </section>
  )
}