import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

export default function Banner() {
  return (
    <>
      <section className="bg-navyblue">
        <Container>
          <Row>
            <Col lg={12} className="px-xl-4">
              <div className="my-3 d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <p className="text-white bannerNews lh-26 mb-2 mb-lg-0">
                    Keller Postman leads efforts to get justice for water contamination victims at{' '}
                    <strong>Camp Lejeune. </strong>{' '}
                  </p>
                  <Link href={'/'} className="txt-cyan ms-lg-3 fs-14 text-uppercase">
                    sign up for a claim
                  </Link>
                </div>
                <div className="whiteCircle d-flex align-items-center mt-12">
                  <span className="roundCircle me-2 d-block active"></span>
                  <span className="roundCircle mx-2 d-block"></span>
                  <span className="roundCircle mx-2 d-block"></span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bannerWrapper position-relative bg-navyblue">
        <Container>
          <Row>
            <Col xl={9} lg={7} md={7} className="px-xl-4 position-relative">
              <div className="bannerHeading text-white position-absolute">
                <h1 className="mb-32 fw-700">
                  Power <br /> On Your Side
                </h1>
                <p className="pe-xl-5 lh-30 txt-skyblue mb-32">
                  Our lawyers trained at Harvard and Yale, worked at the highest levels of government, and win awards
                  for being the top lawyers in the country. Now they fight every day to get compensation for injured
                  consumers, employees, and veterans from the most powerful defendants.
                </p>
                <div className="homeDivider bg-cyan"></div>
              </div>
            </Col>
            <Col xl={3} lg={5} md={5} className="px-xl-4 bannerCounterMain">
              <div className="bannerCounter ps-md-5 px-xl-5">
                <div className="mb-36">
                  <h2 className="txt-navyblue mb-0 fw-700">$500 Million+</h2>
                  <span className="fs-16 lh-26 fw-400 txt-color">Secured for Clients</span>
                </div>
                <div className="divider mb-36"></div>
                <div className="mb-36">
                  <h2 className="txt-navyblue mb-0 fw-700">750,000+</h2>
                  <span className="fs-16 lh-26 fw-400 txt-color">Clients Represented</span>
                </div>
                <div className="divider mb-36"></div>
                <div className="">
                  <h2 className="txt-navyblue mb-0 fw-700">200+</h2>
                  <span className="fs-16 lh-26 fw-400 txt-color">Attorneys &amp; Staff</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
