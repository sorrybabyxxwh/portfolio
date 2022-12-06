import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import { ProjectCard } from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'


export const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Development',
            imgUrl: projImg1,
        },
        {
            title: 'Project 2',
            description: 'Development',
            imgUrl: projImg2,
        },
        {
            title: 'Project 3',
            description: 'Development',
            imgUrl: projImg3,
        },
    ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard key={index} {...project}/>        
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                Web Development
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                Web Development
                            </Tab.Pane>
                            
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>

    )
}