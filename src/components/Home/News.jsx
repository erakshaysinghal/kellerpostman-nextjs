import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function News() {
    return (
        <section className="section-padding bg-skyblue">
            <Container>
                <Row>
                    <Col lg={12} className="px-xl-4">
                        <h2 className="txt-navyblue fw-700 mb-40">In the News</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} sm={6} className="px-xl-4">
                        <div className="newsBlock bg-white mb-40">
                            <div className="newsImg text-center">
                                <Link href={'/'}>
                                    <Image src={'/kellerimages/news/image.png'} width={400} height={172} alt="Keller Postman Partners Honored as 2022 Lawdragon Leading Plaintiff Financial Lawyers" className="img-fluid w-100" />
                                </Link>
                            </div>
                            <div className="newsContent">
                                <h4 className="fw-700 mb-20">
                                    <Link href={'/'} className="txt-darkblue">
                                        Keller Postman Partners Honored as 2022 Lawdragon Leading Plaintiff Financial Lawyers
                                    </Link>
                                </h4>
                                <p className="lh-22 fs-14 txt-lightgrey mb-0">July 27, 2022</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className="px-xl-4">
                        <div className="newsBlock bg-white mb-40">
                            <div className="newsImg text-center">
                                <Link href={'/'}>
                                    <Image src={'/kellerimages/news/image2.png'} width={400} height={172} alt="Keller Postman Named Privacy &amp; Data Breach Law Firm of the Year at the 2022 Elite Trial Lawyers Awards" className="img-fluid w-100" />
                                </Link>
                            </div>
                            <div className="newsContent">
                                <h4 className="fw-700 mb-20">
                                    <Link href={'/'} className="txt-darkblue">
                                        Keller Postman Named Privacy &amp; Data Breach Law Firm of the Year at the 2022 Elite Trial Lawyers Awards
                                    </Link>
                                </h4>
                                <p className="lh-22 fs-14 txt-lightgrey mb-0">July 27, 2022</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className="px-xl-4">
                        <div className="newsBlock bg-white mb-40">
                            <div className="newsImg text-center">
                                <Link href={'/'}>
                                    <Image src={'/kellerimages/news/image3.png'} width={400} height={172} alt="Keller Postman Files Merits Brief in Mallory v. Norfolk Southern Railway" className="img-fluid w-100" />
                                </Link>
                            </div>
                            <div className="newsContent">
                                <h4 className="fw-700 mb-20">
                                    <Link href={'/'} className="txt-darkblue">
                                        Keller Postman Files Merits Brief in Mallory v. Norfolk Southern Railway
                                    </Link>
                                </h4>
                                <p className="lh-22 fs-14 txt-lightgrey mb-0">July 27, 2022</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={12} className="px-4">
                        <Link href={'/'} className="txt-lightblue fw-700 fs-16 lh-20 text-uppercase">View All News &amp; Insights</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}