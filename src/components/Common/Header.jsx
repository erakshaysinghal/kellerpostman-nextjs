import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="mb-0 bg-black py-0 position-relative">
        <Container>
          <Navbar.Brand href="#" className="text-white fw-bold ms-xl-2">
            <Image src={'/kellerimages/logo/logo.svg'} width={320} height={58} alt="Keller Postman Logo" />
          </Navbar.Brand>
          <div className="d-flex">
            <div className="freeCaseMenu bg-lightblue position-relative d-lg-none">
              <Link href={'/'} className="nav-link text-white text-uppercase">
                Free Case Evaluation
              </Link>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <Image src={'/kellerimages/logo/logo.svg'} width={171} height={33} alt="Keller Postman Logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-xl-3 header-navigation">
                <Link href={'/'} className="nav-link">
                  Team
                </Link>
                <Link href={'/'} className="nav-link">
                  <span className="me-1">Cases </span>{' '}
                  <FontAwesomeIcon icon={faChevronDown} width={12} height={12} className="d-none d-lg-block" />
                </Link>
                <Link href={'/'} className="nav-link d-block d-lg-none">
                  Practices
                </Link>
                <Link href={'/'} className="nav-link d-block d-lg-none">
                  About
                </Link>
                <Link href={'/'} className="nav-link d-block d-lg-none">
                  News &amp; Insight
                </Link>
                <Link href={'/'} className="nav-link d-block d-lg-none">
                  Careers
                </Link>
                <Link href={'/'} className="nav-link d-block d-lg-none">
                  Contact
                </Link>
              </Nav>
              <div className="freeCaseMenu bg-lightblue position-relative d-none d-lg-block me-xl-2">
                <Link href={'/'} className="nav-link text-white text-uppercase">
                  Free Case Evaluation
                </Link>
                <div className="megaMenu bg-white">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="megaCaseList mb-32">
                        <h4 className="fs-16 txt-navyblue fw-700 lh-24 mb-0">Camp Lejeune Litigation</h4>
                        <span className="txt-lightgrey fs-12 lh-18">
                          Seeking Justice for Water Contamination Victims
                        </span>
                      </div>
                      <div className="megaCaseList mb-32">
                        <h4 className="fs-16 txt-navyblue fw-700 lh-24 mb-0">NEC/Infant-Formula Litigation</h4>
                        <span className="txt-lightgrey fs-12 lh-18">
                          Representing Parents of Infants Diagnosed with Necrotizing Enterocolitis
                        </span>
                      </div>
                      <div className="megaCaseList mb-32">
                        <h4 className="fs-16 txt-navyblue fw-700 lh-24 mb-0">Zantac (Ranitidine) Litigation</h4>
                        <span className="txt-lightgrey fs-12 lh-18">
                          Seeking Justice for Carcinogens Found in Heartburn Medication
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="megaCaseList mb-32">
                        <h4 className="fs-16 txt-navyblue fw-700 lh-24 mb-0">Acetaminophen Litigation</h4>
                        <span className="txt-lightgrey fs-12 lh-18">
                          Seeking Justice for Children Diagnosed with Autism and/or ADHD
                        </span>
                      </div>
                      <div className="megaCaseList mb-32">
                        <h4 className="fs-16 txt-navyblue fw-700 lh-24 mb-0">3M Combat Arms Litigation</h4>
                        <span className="txt-lightgrey fs-12 lh-18">
                          Representing Servicemembers with Hearing Loss/Damage Caused by 3M Earplugs
                        </span>
                      </div>
                      <div className="megaCaseList mb-32">
                        <h4 className="fs-16 txt-navyblue fw-700 lh-24 mb-0">Paragard IUD Litigation</h4>
                        <span className="txt-lightgrey fs-12 lh-18">
                          Seeking Justice for Pain &amp; Infertility Caused by the Paragard IUD
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <hr className="divider mx-auto my-4" width="100%" />
                      <Link href={'/'} className="txt-navyblue text-uppercase fw-700 fs-16 lh-24">
                        view all cases
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="deskHamburger position-absolute d-none d-xl-block">
                <Image src={'/kellerimages/logo/hamburger.svg'} width={24} height={24} alt="Desktop Hamburger" />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
