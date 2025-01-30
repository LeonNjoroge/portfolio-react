import javascript from "../assets/img/javascript.svg";
import css3 from "../assets/img/css3.svg";
import expressjs from "../assets/img/expressjs.svg";
import figma from "../assets/img/figma.svg";
import mongodb from "../assets/img/mongodb.svg";
import nodejs from "../assets/img/nodejs.svg";
import react from "../assets/img/react.svg";
import tailwindcss from "../assets/img/tailwindcss.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Tools = () => {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Essential Tools I use</h2>
                        <p>Discover the powerful tools and technologies I use to create<br></br> high-performing web and mobile applications</p>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={nodejs}  />
                                <h5>NodeJS</h5>
                                <h6>Web Server</h6>
                            </div>
                            <div className="item">
                                <img src={tailwindcss}  />
                                <h5>TailwindCss</h5>
                                <h6>User Interface</h6>
                            </div>
                            <div className="item">
                                <img src={react}  />
                                <h5>React / React Native</h5>
                                <h6>Framework for mobile and web apps</h6>
                            </div>
                            <div className="item">
                                <img src={figma}  />
                                <h5>Figma</h5>
                                <h6>Design tool</h6>
                            </div>
                            <div className="item">
                                <img src={expressjs}  />
                                <h5>ExpressJS</h5>
                                <h6>Node Framework</h6>
                            </div>
                            <div className="item">
                                <img src={javascript}  />
                                <h5>JavaScript</h5>
                                <h6>Programming Language</h6>
                            </div>
                            <div className="item">
                                <img src={mongodb}  />
                                <h5>MongoDB</h5>
                                <h6>Database</h6>
                            </div>
                            <div className="item">
                                <img src={css3}  />
                                <h5>CSS</h5>
                                <h6>User Interface</h6>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp}  />
    </section>
  )
}
