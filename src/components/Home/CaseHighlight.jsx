import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

export default function CaseHighlight() {
  return (
    <section className="section-padding bg-navyblue">
      <Container>
        <Row>
          <Col lg={12} className="px-xl-4">
            <h2 className="text-white mb-40 fw-700">Case Highlights</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={4} sm={6} className="px-xl-4">
            <div className="caseBlock bg-white mb-5">
              <div className="caseImg text-center">
                <Image
                  src={'/kellerimages/case-highlight/case1.png'}
                  width={400}
                  height={230}
                  alt="NEC/Infant-Formula Litigation"
                  className="img-fluid w-100"
                />
              </div>
              <div className="caseContent">
                <h4 className="fw-700">
                  <Link href={'/'} className="txt-darkblue">
                    Camp Lejeune Litigation
                  </Link>
                </h4>
                <p className="lh-26 txt-lightgrey mb-0">Seeking Justice for Water Contamination Victims</p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="px-xl-4">
            <div className="caseBlock bg-white mb-5">
              <div className="caseImg text-center">
                <Image
                  src={'/kellerimages/case-highlight/case2.png'}
                  width={400}
                  height={230}
                  alt="NEC/Infant-Formula Litigation"
                  className="img-fluid w-100"
                />
              </div>
              <div className="caseContent">
                <h4 className="fw-700">
                  <Link href={'/'} className="txt-darkblue">
                    NEC/Infant-Formula Litigation
                  </Link>
                </h4>
                <p className="lh-26 txt-lightgrey mb-0">
                  Representing Parents of Infants Diagnosed with Necrotizing Enterocolitis
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="px-xl-4">
            <div className="caseBlock bg-white mb-5">
              <div className="caseImg text-center">
                <Image
                  src={'/kellerimages/case-highlight/case3.png'}
                  width={400}
                  height={230}
                  alt="Acetaminophen Litigation"
                  className="img-fluid w-100"
                />
              </div>
              <div className="caseContent">
                <h4 className="fw-700">
                  <Link href={'/'} className="txt-darkblue">
                    Acetaminophen Litigation
                  </Link>
                </h4>
                <p className="lh-26 txt-lightgrey mb-0">Seeking Justice for Children Diagnosed with ASD and/or ADHD</p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="px-xl-4">
            <div className="caseBlock bg-white mb-5">
              <div className="caseImg text-center">
                <Image
                  src={'/kellerimages/case-highlight/case4.png'}
                  width={400}
                  height={230}
                  alt="Zantac (Ranitidine) Litigation"
                  className="img-fluid w-100"
                />
              </div>
              <div className="caseContent">
                <h4 className="fw-700">
                  <Link href={'/'} className="txt-darkblue">
                    {' '}
                    Zantac (Ranitidine) Litigation
                  </Link>
                </h4>
                <p className="lh-26 txt-lightgrey mb-0">
                  Seeking Justice for Carcinogens Found in Heartburn Medication
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="px-xl-4">
            <div className="caseBlock bg-white mb-5">
              <div className="caseImg text-center">
                <Image
                  src={'/kellerimages/case-highlight/case5.png'}
                  width={400}
                  height={230}
                  alt="3M Combat Arms Litigation"
                  className="img-fluid w-100"
                />
              </div>
              <div className="caseContent">
                <h4 className="fw-700">
                  <Link href={'/'} className="txt-darkblue">
                    3M Combat Arms Litigation
                  </Link>
                </h4>
                <p className="lh-26 txt-lightgrey mb-0">Representing Veterans with Hearing Damage and Hearing Loss</p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="px-xl-4">
            <div className="caseBlock bg-white mb-30">
              <div className="caseImg text-center">
                <Image
                  src={'/kellerimages/case-highlight/case6.png'}
                  width={400}
                  height={230}
                  alt="Paragard IUD Litigation"
                  className="img-fluid w-100"
                />
              </div>
              <div className="caseContent">
                <h4 className="fw-700">
                  <Link href={'/'} className="txt-darkblue">
                    Paragard IUD Litigation
                  </Link>
                </h4>
                <p className="lh-26 txt-lightgrey mb-0">Representing Veterans with Hearing Damage and Hearing Loss</p>
              </div>
            </div>
          </Col>
          <Col lg={12} className="px-4">
            <Link href={'/'} className="txt-cyan fw-700 fs-16 lh-20 text-uppercase">
              View All Cases
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
