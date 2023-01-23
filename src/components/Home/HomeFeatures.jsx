import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

export default function HomeFeatures() {
  return (
    <section className="section-padding bg-navyblue">
      <Container>
        <Row>
          <Col lg={3} md={6} sm={6} className="px-3 px-xl-4 featuresOuter position-relative">
            <div className="featuresBlock">
              <div className="featureIcon text-center mb-20">
                <Image src={'/kellerimages/icons/hand.svg'} width={80} height={80} alt="Hand Icon" />
              </div>
              <div className="featureContent px-xl-4 text-center">
                <h4 className="fs-22 text-white fw-700 lh-30 mb-20">Client-Focused</h4>
                <p className="fs-16 fw-400 lh-26 mb-0">
                  We make the process easy for our clients. Our dedicated team of lawyers and case managers are highly
                  responsive because clients always come first.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6} className="px-3 px-xl-4 featuresOuter position-relative">
            <div className="featuresBlock">
              <div className="featureIcon text-center mb-20">
                <Image src={'/kellerimages/icons/fire.svg'} width={80} height={80} alt="Fire Icon" />
              </div>
              <div className="featureContent px-xl-4 text-center">
                <h4 className="fs-22 text-white fw-700 lh-30 mb-20">Aggressive</h4>
                <p className="fs-16 fw-400 lh-26 mb-0">
                  We have a strong track record of winning large recoveries for clients, because we take the fight
                  aggressively to defendants.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6} className="px-3 px-xl-4 featuresOuter position-relative">
            <div className="featuresBlock">
              <div className="featureIcon text-center mb-20">
                <Image src={'/kellerimages/icons/bolt.svg'} width={80} height={80} alt="Bolt Icon" />
              </div>
              <div className="featureContent px-xl-4 text-center">
                <h4 className="fs-22 text-white fw-700 lh-30 mb-20">Fast</h4>
                <p className="fs-16 fw-400 lh-26 mb-0">
                  Defendants want delay. But our clients deserve their day in court as quickly as possible, so we
                  constantly push their cases forward.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6} className="px-3 px-xl-4 featuresOuter position-relative">
            <div className="featuresBlock">
              <div className="featureIcon text-center mb-20">
                <Image src={'/kellerimages/icons/bulb.svg'} width={80} height={80} alt="Bolt Icon" />
              </div>
              <div className="featureContent px-xl-4 text-center">
                <h4 className="fs-22 text-white fw-700 lh-30 mb-20">Groundbreaking</h4>
                <p className="fs-16 fw-400 lh-26 mb-0">
                  Our innovative litigation strategies change the course of hard cases and maximize recoveries for our
                  clients.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
