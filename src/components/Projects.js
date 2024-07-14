import { Container, Row,Col,Tab,Nav, TabContainer } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bg from "../assets/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import pro from "../assets/skills/flutter.png"
import aip from "../assets/skills/ai.jpg"
import webp from "../assets/skills/web.jpg"
import pro2 from "../assets/skills/jetpack compose.png"
import 'animate.css';
export const Projects = () => {
  const web = [
    {
      title: "Portfolio",
      description: "My portfolio website",
      imgUrl: webp,
    },
    {
      title: "Permalist",
      description: "Todo react app with postgre sql",
      imgUrl: webp,
    },
    {
      title: "KOKO-AI",
      description: "Company website with auth",
      imgUrl: webp,
    },
    {
      title: "Meal Mate",
      description: "Ai based diet planner website",
      imgUrl: webp,
    },
    
  ];

    const app = [
      {
        title: "MeChat",
        description: "Chat Application",
        imgUrl: pro,
      },
      {
        title: "HearIt",
        description: "Music Player",
        imgUrl: pro,
      },
      {
        title: "Xpense",
        description: "Expense Tracker",
        imgUrl: pro,
      },
      {
        title: "Instagram Clone",
        description: "An instagram clone App",
        imgUrl: pro,
      },
      {
        title: "Rescue Mate",
        description: "A disaster alerting app",
        imgUrl: pro,
      },
      {
        title: "Todo App",
        description: "A simple Todo app with Firebase",
        imgUrl: pro,
      },
      {
        title: "Calculator",
        description: "A simple calculator",
        imgUrl: pro2,
      },
    ];
    const ai = [
      {
        title: "DeepFake",
        description: "DeepFake Video Detection",
        imgUrl: aip,
      },
      {
        title: "Youtube Summarizer",
        description: "Youtube summarizer in multiple languages.",
        imgUrl: aip,
      },
      {
        title: "Face Recognition",
        description: "Expense Tracker",
        imgUrl: aip,
      },
      {
        title: "Chat-Bot",
        description: "Rules Controlled Chat-Bot",
        imgUrl: aip,
      },
      {
        title: "Tic-Tac-Toe",
        description: "AI Tic Tac Toe Bot",
        imgUrl: aip,
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