import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

export default function MakeItEasy() {
  return (
    <section className="section-padding bg-skyblue">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="text-center easyHeading mb-4 mb-lg-5">
              <h2 className="txt-lightblue fw-700">We make it easy</h2>
              <h3 className="txt-darkblue fs-36 fw-700">to get compensated</h3>
            </div>
          </Col>
        </Row>
        <Row className="px-xl-4">
          <Col lg={3} md={6} className="px-lg-0">
            <div className="easyBock text-center bg-white">
              <div className="easyIcon mb-20">
                <Image src={'/kellerimages/icons/step1.svg'} width={100} height={100} alt="Step 1" />
              </div>
              <p className="txt-navyblue fs-18 mb-0 lh-30">Signing up takes most clients only 3-5 minutes.</p>
            </div>
          </Col>
          <Col lg={3} md={6} className="px-lg-0">
            <div className="easyBock text-center bg-white">
              <div className="easyIcon mb-20">
                <Image src={'/kellerimages/icons/step2.svg'} width={100} height={100} alt="Step 2" />
              </div>
              <p className="txt-navyblue fs-18 mb-0 lh-30">Our team collects the evidence needed to win your case.</p>
            </div>
          </Col>
          <Col lg={3} md={6} className="px-lg-0">
            <div className="easyBock text-center bg-white">
              <div className="easyIcon mb-20">
                <Image src={'/kellerimages/icons/step3.svg'} width={100} height={100} alt="Step 3" />
              </div>
              <p className="txt-navyblue fs-18 mb-0 lh-30">
                We regularly update you, asking for more information only when needed.{' '}
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} className="px-lg-0">
            <div className="easyBock easyBlockLast text-center bg-white">
              <div className="easyIcon mb-20">
                <Image src={'/kellerimages/icons/step4.svg'} width={100} height={100} alt="Step 4" />
              </div>
              <p className="txt-navyblue fs-18 mb-0 lh-30">You pay nothing unless we get you compensation. </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
