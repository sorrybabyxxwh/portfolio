import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import html from '../assets/img/icons8-html-5.svg';
import css from '../assets/img/icons8-css3.svg';
import javascript from '../assets/img/icons8-javascript.svg';
import bootstrap from '../assets/img/icons8-bootstrap.svg';
import react from '../assets/img/icons8-react-native.svg';

export const Skills = () => {
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

      return (
        <section className="skills" id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={html} alt="Image"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image"/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image"/>
                                <h5>React</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>

      )
    }
    