import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/logo2.jpg"
import git from "../assets/github.svg"
import link from '../assets/linkedin.svg'
import twitter from "../assets/twitter.svg"

export const Footer =()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}> 
                    <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/habeeb-182522225/"><img src={link}/></a>
                        <a href="https://github.com/hxbeeb"><img src={git}/></a>
                        <a href="https://x.com/hxbeeb_x"><img src={twitter}/></a>
                    </div>
                    <p>CopyRight {new Date().getFullYear()}. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}