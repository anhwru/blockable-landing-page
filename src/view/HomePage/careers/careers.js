import React from "react";
import * as Rb from "react-bootstrap";

const CareersSlider = () => {
  return (
    <Rb.Carousel>
      <Rb.Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
          height={300}
        />
        <Rb.Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Rb.Carousel.Caption>
      </Rb.Carousel.Item>
      <Rb.Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
          height={300}
        />
        <Rb.Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Rb.Carousel.Caption>
      </Rb.Carousel.Item>
      <Rb.Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
          height={300}
        />
        <Rb.Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Rb.Carousel.Caption>
      </Rb.Carousel.Item>
    </Rb.Carousel>
  );
};

export default CareersSlider;
