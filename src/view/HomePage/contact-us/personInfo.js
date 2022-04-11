import React, { Component } from "react";
import Slider from "react-slick";
import * as Rb from "react-bootstrap";
import Team from "../../../assets/user.png";
export default class PersonInfo extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <Rb.Col md={3}>
            <Rb.Card className="team_item">
              <Rb.Card.Img src={Team} />
              <Rb.Card.Body>
                <Rb.Card.Title>Jane Cooper</Rb.Card.Title>
                <p className="position">Project Manager</p>
                <Rb.Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua.
                </Rb.Card.Text>
              </Rb.Card.Body>
            </Rb.Card>
          </Rb.Col>
          <Rb.Col md={3}>
            <Rb.Card className="team_item">
              <Rb.Card.Img src={Team} />
              <Rb.Card.Body>
                <Rb.Card.Title>Jane Cooper</Rb.Card.Title>
                <p className="position">Project Manager</p>
                <Rb.Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua.
                </Rb.Card.Text>
              </Rb.Card.Body>
            </Rb.Card>
          </Rb.Col>
          <Rb.Col md={3}>
            <Rb.Card className="team_item">
              <Rb.Card.Img src={Team} />
              <Rb.Card.Body>
                <Rb.Card.Title>Jane Cooper</Rb.Card.Title>
                <p className="position">Project Manager</p>
                <Rb.Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua.
                </Rb.Card.Text>
              </Rb.Card.Body>
            </Rb.Card>
          </Rb.Col>
          <Rb.Col md={3}>
            <Rb.Card className="team_item">
              <Rb.Card.Img src={Team} />
              <Rb.Card.Body>
                <Rb.Card.Title>Jane Cooper</Rb.Card.Title>
                <p className="position">Project Manager</p>
                <Rb.Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua.
                </Rb.Card.Text>
              </Rb.Card.Body>
            </Rb.Card>
          </Rb.Col>
          <Rb.Col md={3}>
            <Rb.Card className="team_item">
              <Rb.Card.Img src={Team} />
              <Rb.Card.Body>
                <Rb.Card.Title>Jane Cooper</Rb.Card.Title>
                <p className="position">Project Manager</p>
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
