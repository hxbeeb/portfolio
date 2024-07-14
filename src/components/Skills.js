import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bg from '../assets/color-sharp.png';
import meter1 from '../assets/skills/react.png';
import meter2 from '../assets/skills/flutter.png';
import meter3 from '../assets/skills/node.png';
import express from '../assets/skills/express.png';
import postgre from '../assets/skills/postgre.png';
import firebase from '../assets/skills/firebase.png';
import sql from '../assets/skills/sql.png';
import jet from '../assets/skills/jetpack compose.png';
import 'animate.css/animate.min.css';
import TrackVisibility from 'react-on-screen';
export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                    <TrackVisibility>
                {({ isVisible }) =>(
                <div className={isVisible ? "animate__animated animate__heartBeat": ""}>
                        <h2>Skills</h2>
                        <p>Mastering the Art of Software Development</p>
                        </div> )}</TrackVisibility>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Node js</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" />
                                <h5>Express js</h5>
                            </div>
                            <div className="item">
                                <img src={postgre} alt="Image" />
                                <h5>Postgre Sql</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>Sql</h5>
                            </div>
                            <div className="item">
                                <img src={jet} alt="Image" />
                                <h5>Jetpack Compose</h5>
                            </div>
                            <div className="item">
                                <img src={firebase} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={bg} alt="Image" />
    </section>
      )
}