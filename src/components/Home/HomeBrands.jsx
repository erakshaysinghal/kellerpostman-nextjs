/* eslint-disable @next/next/no-img-element */
import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';

export default function HomeBrands() {
  return (
    <section className="section-padding">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="brandHeading text-center mb-4">
              <h2 className="fs-36 txt-lightblue fw-700">As Seen On</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={2} lg={4} md={4} xs={6} className="px-lg-4">
            <div className="text-center mb-4 mb-xl-0">
              <img src={'/kellerimages/brands/brand1.png'} className="img-fluid" alt="Brand 1" />
            </div>
          </Col>
          <Col xl={2} lg={4} md={4} xs={6} className="px-lg-4">
            <div className="text-center mb-4 mb-xl-0">
              <img src={'/kellerimages/brands/brand2.png'} className="img-fluid" alt="Brand 2" />
            </div>
          </Col>
          <Col xl={2} lg={4} md={4} xs={6} className="px-lg-4">
            <div className="text-center mb-4 mb-xl-0">
              <img src={'/kellerimages/brands/brand3.png'} className="img-fluid" alt="Brand 3" />
            </div>
          </Col>
          <Col xl={2} lg={4} md={4} xs={6} className="px-lg-4">
            <div className="text-center mb-4 mb-xl-0">
              <img src={'/kellerimages/brands/brand4.png'} className="img-fluid" alt="Brand 4" />
            </div>
          </Col>
          <Col xl={2} lg={4} md={4} xs={6} className="px-lg-4">
            <div className="text-center mb-xl-0">
              <img src={'/kellerimages/brands/brand5.png'} className="img-fluid" alt="Brand 5" />
            </div>
          </Col>
          <Col xl={2} lg={4} md={4} xs={6} className="px-lg-4">
            <div className="text-center mb-xl-0">
              <img src={'/kellerimages/brands/brand6.png'} className="img-fluid" alt="Brand 6" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
