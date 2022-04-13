import React, { Component } from "react";
import Slider from "react-slick";
import * as Rb from "react-bootstrap";
import Team from "../../../assets/user.png";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <Rb.Col md={4} lg={4} xl={4}>
            <Rb.Card>
              <Rb.Card.Img variant="top" src={Team} />
              <Rb.Card.Body>
                <Rb.Card.Title>Jane Cooper</Rb.Card.Title>
                <h3>Project Manager</h3>
                <Rb.Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua.
                </Rb.Card.Text>
              </Rb.Card.Body>
            </Rb.Card>
          </Rb.Col>

          <Rb.Col md={4} lg={4} xl={4}>
            <Rb.Card>
              <Rb.Card.Img variant="top" src={Team} />
              <Rb.Card.Body>
                <Rb.Card.Title>Jane Cooper</Rb.Card.Title>
                <h3>Project Manager</h3>
                <Rb.Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua.
                </Rb.Card.Text>
              </Rb.Card.Body>
            </Rb.Card>
          </Rb.Col>
          <Rb.Col md={4} lg={4} xl={4}>
            <Rb.Card>
              <Rb.Card.Img variant="top" src={Team} />
              <Rb.Card.Body>
                <Rb.Card.Title>Jane Cooper</Rb.Card.Title>
                <h3>Project Manager</h3>
                <Rb.Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua.
                </Rb.Card.Text>
              </Rb.Card.Body>
            </Rb.Card>
          </Rb.Col>
          <Rb.Col md={4} lg={4} xl={4}>
            <Rb.Card>
              <Rb.Card.Img variant="top" src={Team} />
              <Rb.Card.Body>
                <Rb.Card.Title>Jane Cooper</Rb.Card.Title>
                <h3>Project Manager</h3>
                <Rb.Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua.
                </Rb.Card.Text>
              </Rb.Card.Body>
            </Rb.Card>
          </Rb.Col>
        </Slider>
      </div>
    );
  }
}
