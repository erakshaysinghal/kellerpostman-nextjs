import {
  faFacebook,
  faFacebookF,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
      <footer className="bg-black footer">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="footerContact">
                <h2 className="txt-lightblue text-start text-md-center mb-0">
                  Call us at
                  <Link
                    href="tel:872-264-6677"
                    target={'_blank'}
                    className="ms-0 ms-md-3 text-white d-block d-md-inline"
                  >
                    872-264-6677
                  </Link>
                </h2>
              </div>
            </Col>
            <Col lg={3} md={4} className="px-xl-4">
              <div className="footerBlock">
                <h4 className="fs-16 fw-700 mb-20 lh-20">SITEMAP</h4>
                <ul className="p-0 mx-0 footerlist mb-50">
                  <li>
                    <Link href={'/'}> About </Link>
                  </li>
                  <li>
                    <Link href={'/'}> Our Team </Link>
                  </li>
                  <li>
                    <Link href={'/'}> Cases </Link>
                  </li>
                  <li>
                    <Link href={'/'}> Practice Area </Link>
                  </li>
                  <li>
                    <Link href={'/'}> News &amp; Insight </Link>
                  </li>
                  <li>
                    <Link href={'/'}> Careers </Link>
                  </li>
                  <li>
                    <Link href={'/'}> Contact </Link>
                  </li>
                </ul>
                <div className="d-none d-md-block">
                  <h4 className="fs-16 fw-700 mb-20 lh-20">FOLLOW US</h4>
                  <div className="d-flex">
                    <span className="me-3">
                      <Link href={'/'} target={'_blank'} className="txt-cyan">
                        <FontAwesomeIcon icon={faLinkedin} width={24} height={24} />
                      </Link>
                    </span>
                    <span className="mx-3">
                      <Link href={'/'} target={'_blank'} className="txt-cyan">
                        <FontAwesomeIcon icon={faTwitter} width={24} height={24} />
                      </Link>
                    </span>
                    <span className="ms-3">
                      <Link href={'/'} target={'_blank'} className="txt-cyan">
                        <FontAwesomeIcon icon={faFacebook} width={24} height={24} />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} md={4} className="px-xl-4">
              <div className="footerBlock">
                <h4 className="fs-16 fw-700 mb-20 lh-20">FEATURED CASES</h4>
                <ul className="p-0 mx-0 footerlist mb-50">
                  <li>
                    <Link href={'/'}> Camp Lejeune Litigation </Link>
                  </li>
                  <li>
                    <Link href={'/'}> NEC/Infant Formula Litigation </Link>
                  </li>
                  <li>
                    <Link href={'/'}> Acetaminophen/Tylenol Litigation </Link>
                  </li>
                  <li>
                    <Link href={'/'}> Zantac Litigation </Link>
                  </li>
                  <li>
                    <Link href={'/'}> 3M Combat Arms Earplugs Litigation </Link>
                  </li>
                  <li>
                    <Link href={'/'}> View All Cases </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} md={4} className="px-xl-4">
              <div className="footerBlock">
                <h4 className="fs-16 fw-700 mb-20 lh-20">OFFICES</h4>
                <ul className="p-0 mx-0 footerlist mb-50">
                  <li>
                    <h5 className="text-white fs-14 fw-700 lh-20">Chicago, IL</h5>
                    <p className="fs-14 lh-22 fw-400 mb-3">150 N. Riverside Plaza, Suite 4100 Chicago, IL 60606</p>
                  </li>
                  <li>
                    <h5 className="text-white fs-14 fw-700 lh-20">Washington, D.C.</h5>
                    <p className="fs-14 lh-22 fw-400 mb-3">
                      1100 Vermont Avenue, N.W., 12th Floor Washington, D.C. 20005
                    </p>
                  </li>
                  <li>
                    <h5 className="text-white fs-14 fw-700 lh-20">Austin, TX</h5>
                    <p className="fs-14 lh-22 fw-400 mb-3">111 Congress Avenue, Suite 500 Austin, TX 78701</p>
                  </li>
                  <li>
                    <h5 className="text-white fs-14 fw-700 lh-20">Miami, FL</h5>
                    <p className="fs-14 lh-22 fw-400 mb-3">111 Congress Avenue, Suite 500 Austin, TX 78701</p>
                  </li>
                </ul>
                <div className="d-block d-md-none">
                  <h4 className="fs-16 fw-700 mb-20 lh-20">FOLLOW US</h4>
                  <div className="d-flex">
                    <span className="me-3">
                      <Link href={'/'} target={'_blank'} className="txt-cyan">
                        <FontAwesomeIcon icon={faLinkedin} width={24} height={24} />
                      </Link>
                    </span>
                    <span className="mx-3">
                      <Link href={'/'} target={'_blank'} className="txt-cyan">
                        <FontAwesomeIcon icon={faTwitter} width={24} height={24} />
                      </Link>
                    </span>
                    <span className="ms-3">
                      <Link href={'/'} target={'_blank'} className="txt-cyan">
                        <FontAwesomeIcon icon={faFacebook} width={24} height={24} />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={12}>
              <div className="copyright text-start text-md-center my-2">
                <p className="fs-14 copylinks fw-400 lh-22">
                  © 2022 Keller Postman LLC. All rights reserved.
                  <span className="mx-3">Design by SPINX Digital</span>
                  <span className="d-block d-md-inline ms-0 legallinks">
                    <span>
                      <Link href={'/'}>Terms</Link>
                    </span>
                    <span>
                      <Link href={'/'}>Privacy</Link>
                    </span>
                    <span>
                      <Link href={'/'}>Legal Disclaimer</Link>
                    </span>
                  </span>
                </p>
                <p className="fs-14 lh-22 fw-400 mb-0">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
