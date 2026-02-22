import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/logo2.jpg"
import git from "../assets/github.svg"
import link from '../assets/linkedin.svg'
import twitter from "../assets/twitter.svg"

export const Footer =()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="footer-flex-row">
                    <Col xs={12} md={6} className="footer-logo-col text-md-start text-center">
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col xs={12} md={6} className="footer-right-col text-center text-md-end">
                        <div className="footer-right-inner">
                          <div className="social-icon">
                              <a href="https://www.linkedin.com/in/habeeb-182522225/"><img src={link} alt="LinkedIn" /></a>
                              <a href="https://github.com/hxbeeb"><img src={git} alt="GitHub" /></a>
                              <a href="https://x.com/hxbeeb_x"><img src={twitter} alt="X (Twitter)" /></a>
                          </div>
                          <p>CopyRight {new Date().getFullYear()}. All Right Reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}