import React, { Component } from "react";
import * as Rb from "react-bootstrap";
import Slider from "react-slick";

export default class Careers extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings} className="card_content-bot">
          <Rb.Col className="top-content">
            <p className="timer">26.3 - 2022</p>
            <h3>An exclusive information session for</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat ut aliquip ex ea commodo
              consequat.{" "}
            </p>
          </Rb.Col>
          <Rb.Col className="top-content">
            <p className="timer">26.3 - 2022</p>
            <h3>An exclusive information session for</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat ut aliquip ex ea commodo
              consequat.{" "}
            </p>
          </Rb.Col>
          <Rb.Col className="top-content">
            <p className="timer">26.3 - 2022</p>
            <h3>An exclusive information session for</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat ut aliquip ex ea commodo
              consequat.{" "}
            </p>
          </Rb.Col>
          <Rb.Col className="top-content">
            <p className="timer">26.3 - 2022</p>
            <h3>An exclusive information session for</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat ut aliquip ex ea commodo
              consequat.{" "}
            </p>
          </Rb.Col>
        </Slider>
      </div>
    );
  }
}
