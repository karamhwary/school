import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstpic from "../../../../assets/firstpic.jpg";
import sectpic from "../../../../assets/secpic.jpg";
import thirdtpic from "../../../../assets/thirdpic.jpg";
const Carousels = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block h-4 width-4" src={firstpic} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block h-4 w-4" src={sectpic} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block h-4 w-4" src={thirdtpic} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
