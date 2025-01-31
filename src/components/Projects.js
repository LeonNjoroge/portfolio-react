import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/masaigame.png";
import projImg2 from "../assets/img/netwas.png";
import projImg3 from "../assets/img/evernai.png";
import projImg4 from "../assets/img/inventovault.png";
import projImg5 from "../assets/img/Lightblog.png";
import projImg6 from "../assets/img/schManagement.png";
import projImg7 from "../assets/img/healthC.png";
import projImg8 from "../assets/img/airbnb.png";
import projImg9 from "../assets/img/tic-tac.png";
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
      description: "React | Javascript | PostgreSQL",
      imgUrl: projImg2,
      url:"https://netwas-international.org"
    },
    {
      title: "EveraNai Properties",
      description: "React | Javascript | PostgreSQL | Node",
      imgUrl: projImg3,
      url:"https://evernaiproperties.site"
    },
    {
      title: "Invento Vault",
      description: "React | TailwindCSS | PostgreSQL | Prisma",
      imgUrl: projImg4,
      url:"https://github.com/LeonNjoroge/Inventory_App"
    }
  ];

  const passion_projects = [
    {
      title: "Light Blog",
      description: "React | NodeJS | ExpressJS",
      imgUrl: projImg5,
      url:"https://github.com/LeonNjoroge/light-blog"
    },
    {
      title: "School Management App",
      description: "Python | Flask | Oracle DB",
      imgUrl: projImg6,
      url:"https://github.com/LeonNjoroge/school-management-app"
    },
    {
      title: "Tic Tac Toe App",
      description: "React Native | ExpressJS",
      imgUrl: projImg9,
      url:"https://github.com/LeonNjoroge/TicTacToe"
    },
    {
      title: "Health app dashboard",
      description: "Javascript | ChartJS | CSS",
      imgUrl: projImg7,
    },
    {
      title: "AirBNB Clone",
      description: "React | Python | Flask | MongoDB",
      imgUrl: projImg8,
      url:"https://github.com/LeonNjoroge/AirBnB_clone"
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
