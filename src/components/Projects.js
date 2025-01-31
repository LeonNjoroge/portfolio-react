import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/masai.png";
import projImg2 from "../assets/img/netwas.png";
import projImg3 from "../assets/img/evernai.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Masai Game Resort",
      description: "React | Javascript | CSS",
      imgUrl: projImg1,
      url:"https://masaigameresort.co.ke"
    },
    {
      title: "Netwas International",
      description: "Company founded by WHO",
      imgUrl: projImg2,
      url:"https://netwas-international.org"
    },
    {
      title: "EveraNai Properties",
      description: "Design & Development",
      imgUrl: projImg3,
      url:"https://evernaiproperties.site"
    },
    {
      title: "Invento Vault",
      description: "React | TailwindCSS | PostgreSQL | Prisma",
      imgUrl: projImg1,
    }
  ];

  const passion_projects = [
    {
      title: "Node Blog",
      description: "Javascript | NodeJS | ExpressJS",
      imgUrl: projImg1,
    },
    {
      title: "School Management App",
      description: "Python | Flask | Oracle DB",
      imgUrl: projImg2,
    },
    {
      title: "Tic Tac Toe App",
      description: "React Native",
      imgUrl: projImg2,
    },
    {
      title: "Health app dashboard",
      description: "Javascript | ChartJS",
      imgUrl: projImg2,
    },
    {
      title: "Maze App",
      description: "C",
      imgUrl: projImg2,
    },
    {
      title: "AirBNB Clone",
      description: "React",
      imgUrl: projImg2,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore a collection of my projects where creativity meets functionality. Show casing various projects focused on<br /> building scalable, user-centric applications and developing innovative solutions</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Client Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Passion Projects</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                          passion_projects.map((project, index) => {
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
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
