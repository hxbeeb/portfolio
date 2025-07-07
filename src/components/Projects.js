import { Container, Row,Col,Tab,Nav, TabContainer } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bg from "../assets/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import pro from "../assets/skills/flutter.png"
import aip from "../assets/skills/ai.jpg"
import webp from "../assets/skills/web.jpg"
import pro2 from "../assets/skills/jetpack compose.png"
import 'animate.css';
import githubLogo from '../assets/github.svg';

export const Projects = () => {
  const web = [
    {
      title: "AlgoCode",
      description: "A modern DSA practice platform for coding and algorithms.",
      imgUrl: webp,
      github: "https://github.com/hxbeeb/AlgoCode"
    },
    {
      title: "Smart Procure",
      description: "A price comparison platform and Smart India Hackathon 2024 winner, built with Python, Selenium, and Flask.",
      imgUrl: webp,
      github: "https://github.com/hxbeeb/smart-procure"
    },
    {
      title: "Buildify",
      description: "A command-driven React.js platform that generates websites instantly from user input.",
      imgUrl: webp,
      github: "https://github.com/hxbeeb/Website-Builder"
    },
    {
      title: "WaveLink",
      description: "A real-time messaging and calling platform with text, audio, and video powered by WebRTC and Socket.IO.",
      imgUrl: webp,
      github: "https://github.com/hxbeeb/WaveLink"
    },
  ];

    const app = [
      {
        title: "Xpense",
        description: "Expense Tracker",
        imgUrl: pro,
        github: "https://github.com/hxbeeb/expense_tracker"
      },
      {
        title: "Rescue Mate",
        description: "A disaster alerting app",
        imgUrl: pro,
        github: "https://github.com/hxbeeb/rescue-mate"
      },
      {
        title: "Instagram Clone",
        description: "An instagram clone App",
        imgUrl: pro,
        github: "https://github.com/hxbeeb/chatvista"
      },
    ];
    const ai = [
      {
        title: "DeepFake",
        description: "DeepFake Video Detection",
        imgUrl: aip,
        github: "https://github.com/hxbeeb/DeepFake"
      },
      {
        title: "Youtube Summarizer",
        description: "Youtube summarizer in multiple languages.",
        imgUrl: aip,
        github: "https://github.com/hxbeeb/eduai"
      },
      {
        title: "Chat-Bot",
        description: "Rules Controlled Chat-Bot",
        imgUrl: aip,
        github: "https://github.com/hxbeeb/chat-bot"
      },
    ];
  
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>(
                <div className={isVisible ? "animate__animated animate__flash": ""}>
                  <h2>Projects</h2>
                  <p>Transforming Ideas into Reality</p>
                  </div>)}
              </TrackVisibility>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">AI/ML</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                    <Row>
                    {
                      
                            web.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                          </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            app.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      
                      <Tab.Pane eventKey="third">
                      <Row>
                          {
                            ai.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={bg}></img>
      </section>
    )
  }