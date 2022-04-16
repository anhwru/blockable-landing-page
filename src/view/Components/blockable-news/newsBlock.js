import React, { Component } from 'react';
import * as Rb from 'react-bootstrap';
import Slider from 'react-slick';

export default class NewsBlock extends Component {
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
        <Slider {...settings} className='card_content-bot'>
          {this.props.items.map((e, i) => (
            <Rb.Col className='top-content' key={i}>
              <p className='timer'>26.3 - 2022</p>
              <h3>{e.title}</h3>
              <p>{e.content}</p>
            </Rb.Col>
          ))}
        </Slider>
      </div>
    );
  }
}
