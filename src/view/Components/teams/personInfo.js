import React, { Component } from 'react';
import Slider from 'react-slick';
import * as Rb from 'react-bootstrap';
import Team from '../../../assets/user.png';

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
        <Slider {...settings}>
          {this.props.items.map((e, i) => (
            <Rb.Col md={4} lg={4} xl={4} key={i}>
              <Rb.Card>
                <Rb.Card.Img variant='top' src={Team} />
                <Rb.Card.Body>
                  <Rb.Card.Title>{e.title.split('|')[0]}</Rb.Card.Title>
                  <h3>{e.title.split('|')[1]}</h3>
                  <Rb.Card.Text>{e.content}</Rb.Card.Text>
                </Rb.Card.Body>
              </Rb.Card>
            </Rb.Col>
          ))}
        </Slider>
      </div>
    );
  }
}
