/* eslint-disable @next/next/no-img-element */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import Slider from 'react-slick';

export default function Awards() {
  const awardsSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    focusOnSelect: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="section-padding">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="awardsWrapper">
              <Slider {...awardsSettings}>
                <div className="text-center">
                  <img
                    src={'/kellerimages/awards/image1.png'}
                    width={180}
                    className="img-fluid mx-auto"
                    alt="Award Image 1"
                  />
                </div>
                <div className="text-center">
                  <img
                    src={'/kellerimages/awards/image2.png'}
                    width={150}
                    className="img-fluid mx-auto"
                    alt="Award Image 2"
                  />
                </div>
                <div className="text-center">
                  <img
                    src={'/kellerimages/awards/image3.png'}
                    width={190}
                    className="img-fluid mx-auto"
                    alt="Award Image 3"
                  />
                </div>
                <div className="text-center">
                  <img
                    src={'/kellerimages/awards/image4.png'}
                    width={190}
                    className="img-fluid mx-auto"
                    alt="Award Image 4"
                  />
                </div>
                <div className="text-center">
                  <img
                    src={'/kellerimages/awards/image5.png'}
                    width={200}
                    className="img-fluid mx-auto"
                    alt="Award Image 5"
                  />
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
