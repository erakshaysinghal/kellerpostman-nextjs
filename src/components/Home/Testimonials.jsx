/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

export default function Testimonials() {
  return (
    <section className="section-padding bg-skyblue">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="testimonials-heading text-center">
              <div className="d-flex starts align-items-center justify-content-center mb-30">
                <span className="mx-1">
                  <img src="/kellerimages/icons/star.svg" alt="star" />
                </span>
                <span className="mx-1">
                  <img src="/kellerimages/icons/star.svg" alt="star" />
                </span>
                <span className="mx-1">
                  <img src="/kellerimages/icons/star.svg" alt="star" />
                </span>
                <span className="mx-1">
                  <img src="/kellerimages/icons/star.svg" alt="star" />
                </span>
                <span className="mx-1">
                  <img src="/kellerimages/icons/star.svg" alt="star" />
                </span>
              </div>
              <h2 className="txt-darkblue fw-700 px-4 px-lg-0 mb-20">Our Clients Love Working With Us</h2>
              <div className="d-flex flex-wrap testimonialsReview align-items-center justify-content-center mb-4 mb-lg-5">
                <span className="mx-1 bbbImg">
                  <img src="/kellerimages/testimonials/bbb.svg" alt="BBB" />
                </span>
                <span className="mx-1 googleImg">
                  <img src="/kellerimages/testimonials/reviews.svg" className="rounded" alt="Google Reviews" />
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} className="px-xl-4">
            <div className="testimonialsBlock bg-white">
              <div className="testimonialsImage text-center mb-30">
                <Image src={'/kellerimages/testimonials/client1.png'} width={100} height={100} alt="Client 1" />
              </div>
              <div className="testimonialsContent text-center">
                <p className="fs-18 lh-30 txt-color mb-20">
                  “Best experience I have ever had with a law firm. Very organized with clear communications. They did
                  the work and I collected the settlement! I highly recommend Keller Postman. Give them a call. You will
                  be glad you did!”
                </p>
                <span className="fw-700 fs-14 txt-darkblue">Charlene R.</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="px-xl-4">
            <div className="testimonialsBlock bg-white">
              <div className="testimonialsImage text-center mb-30">
                <Image src={'/kellerimages/testimonials/client2.png'} width={100} height={100} alt="Client 2" />
              </div>
              <div className="testimonialsContent text-center">
                <p className="fs-18 lh-30 txt-color mb-20">
                  “By far one of the best experiences I’ve ever had with any client-based service company. Not only did
                  they continuously keep you in the loop with new information, they also respond and help you so
                  quickly.”
                </p>
                <span className="fw-700 fs-14 txt-darkblue">David I.</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="px-xl-4">
            <div className="testimonialsBlock bg-white">
              <div className="testimonialsImage text-center mb-30">
                <Image src={'/kellerimages/testimonials/client3.png'} width={100} height={100} alt="Client 3" />
              </div>
              <div className="testimonialsContent text-center">
                <p className="fs-18 lh-30 txt-color mb-20">
                  “First time ever participating in a large scale lawsuit. [Keller Postman] made the whole process quite
                  easy. From start to finish, they did exactly what they said they were going to do and even went a
                  little further!”
                </p>
                <span className="fw-700 fs-14 txt-darkblue">Bekah R.</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="px-xl-4">
            <div className="testimonialsBlock bg-white">
              <div className="testimonialsImage text-center mb-30">
                <Image src={'/kellerimages/testimonials/client4.png'} width={100} height={100} alt="Client 4" />
              </div>
              <div className="testimonialsContent text-center">
                <p className="fs-18 lh-30 txt-color mb-20">
                  “First time ever participating in a large scale lawsuit. [Keller Postman] made the whole process quite
                  easy. From start to finish, they did exactly what they said they were going to do and even went a
                  little further!”
                </p>
                <span className="fw-700 fs-14 txt-darkblue">Ray M.</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="px-xl-4">
            <div className="testimonialsBlock bg-white">
              <div className="testimonialsImage text-center mb-30">
                <Image src={'/kellerimages/testimonials/client5.png'} width={100} height={100} alt="Client 5" />
              </div>
              <div className="testimonialsContent text-center">
                <p className="fs-18 lh-30 txt-color mb-20">
                  “I had the best experience. It was uncomplicated and very easy. They were completely upfront and
                  genuine. I ended up with unexpected results. I mention this firm to everyone who may be looking for
                  this type of help.”
                </p>
                <span className="fw-700 fs-14 txt-darkblue">Wendy P.</span>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="px-xl-4">
            <div className="testimonialsBlock bg-white">
              <div className="testimonialsImage text-center mb-30">
                <Image src={'/kellerimages/testimonials/client6.png'} width={100} height={100} alt="Client 6" />
              </div>
              <div className="testimonialsContent text-center">
                <p className="fs-18 lh-30 txt-color mb-20">
                  “Above what was expected of representation during a lawsuit. Open lines of communication with frequent
                  updates and follow up messages. Settlement delivered as promised, in a timely and easily executed
                  method.”
                </p>
                <span className="fw-700 fs-14 txt-darkblue">Becky B.</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
