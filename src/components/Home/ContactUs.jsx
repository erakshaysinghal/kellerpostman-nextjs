import { useState } from 'react';
import { validEmail, validName, maxLengthCheck } from '_helper/regex';
import { Col, Container, Row } from 'react-bootstrap';

export default function ContactUs() {
  const [enqName, setEnqName] = useState('');
  const [enqPhone, setEnqPhone] = useState('');
  const [enqZipcode, setEnqZipcode] = useState('');
  const [enqEmail, setEnqEmail] = useState('');
  const [enqCase, setEnqCase] = useState('');
  const [enqMessage, setEnqMessage] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    phone: '',
    email: '',
    zipcode: '',
    case: '',
    message: '',
  });

  // Validate Form
  function formValidation() {
    let nameMsg = '';
    let phoneMsg = '';
    let emailMsg = '';
    let zipcodeMsg = '';
    let caseMsg = '';
    let messageMsg = '';
    let isValid = false;

    if (!enqName) {
      nameMsg = 'Please enter name';
    }
    if (enqName && !validName(enqName)) {
      nameMsg = 'Please enter valid name';
    }

    if (enqPhone) {
      if (String(enqPhone).length !== 10) {
        phoneMsg = 'Mobile number must be 10 digits.';
      }
    }

    if (!enqPhone) {
      phoneMsg = 'Please enter phone number';
    }

    if (!enqEmail) {
      emailMsg = 'Please enter email address';
    }
    if (enqEmail && !validEmail(enqEmail)) {
      emailMsg = 'Please enter valid email';
    }

    if (!enqZipcode) {
      zipcodeMsg = 'Please enter zipcode';
    }

    if (enqZipcode) {
      if (String(enqZipcode).length !== 6) {
        zipcodeMsg = 'Zip code must be 6 digits.';
      }
    }

    if (!enqCase) {
      caseMsg = 'Please select case';
    }

    if (!enqMessage) {
      messageMsg = 'Please enter message';
    }

    if (!nameMsg && !phoneMsg && !emailMsg && !zipcodeMsg && !caseMsg && !messageMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        name: '',
        phone: '',
        email: '',
        case: '',
        zipcode: '',
        message: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        phone: phoneMsg,
        email: emailMsg,
        zipcode: zipcodeMsg,
        case: caseMsg,
        message: messageMsg,
      });
      return false;
    }
  }
  // Form button submission
  function submitForm() {
    if (formValidation()) {
      const params = {
        name: enqName,
        email: enqEmail,
        phone: enqPhone,
        message: enqMessage,
        case: caseMessage,
        zipcode: zipcodeMessage,
      };
      setIsSubmitted(true);
    }
  }

  return (
    <section className="section-padding bg-navyblue">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="fw-700 text-center text-white fs-60 mb-32">Start Your Case Today</h2>
          </Col>
          <Col lg={12} className="px-xl-4">
            <div className="bg-white bordercyan">
              <Row>
                <Col lg={6}>
                  <div className="contactImage"></div>
                </Col>
                <Col lg={6}>
                  <div className="contactContent">
                    <p className="fs-18 lh-30 txt-navyblue fw-400 mb-40">
                      We&apos;re ready to start fighting for you. Tell us more about your situation and a member of our
                      team will contact you soon.
                    </p>
                    <form className="row">
                      <div className="col-lg-12">
                        <div className="mb-20">
                          <div className="outlined-input">
                            <input
                              type="text"
                              name="enqName"
                              id="enqName"
                              className="w-100"
                              value={enqName.trimStart().replace(/  +/g, ' ') || ''}
                              onChange={(event) => setEnqName(event.target.value.trimStart().replace(/  +/g, ' '))}
                              placeholder=" "
                            />
                            <label>Full Name</label>
                          </div>
                          {error && errorMessage.name && (
                            <small className="mt-3 text-danger">{errorMessage.name}</small>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="mb-20">
                          <div className="outlined-input">
                            <input
                              type="email"
                              name="enqEmail"
                              id="enqEmail"
                              className="w-100"
                              placeholder=" "
                              value={enqEmail || ''}
                              onChange={(event) => setEnqEmail(event.target.value)}
                            />
                            <label>Email Address</label>
                          </div>
                          {error && errorMessage.email && (
                            <small className="mt-3 text-danger">{errorMessage.email}</small>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="mb-20">
                          <div className="outlined-input">
                            <input
                              type="number"
                              name="enqPhone"
                              id="enqPhone"
                              className="w-100"
                              placeholder=" "
                              maxLength="10"
                              onInput={maxLengthCheck}
                              value={enqPhone || ''}
                              onChange={(event) => setEnqPhone(event.target.value)}
                            />
                            <label>Phone Number</label>
                          </div>
                          {error && errorMessage.phone && (
                            <small className="mt-3 text-danger">{errorMessage.phone}</small>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="mb-20">
                          <div className="outlined-input">
                            <input
                              type="number"
                              name="enqZipcode"
                              id="enqZipcode"
                              className="w-100"
                              placeholder=" "
                              maxLength="6"
                              onInput={maxLengthCheck}
                              value={enqZipcode || ''}
                              onChange={(event) => setEnqZipcode(event.target.value)}
                            />
                            <label>Zip Code</label>
                          </div>
                          {error && errorMessage.zipcode && (
                            <small className="mt-3 text-danger">{errorMessage.zipcode}</small>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="mb-20">
                          <div className="outlined-select">
                            <select
                              name="enqCase"
                              id="enqCase"
                              required
                              value={enqCase || ''}
                              onChange={(event) => setEnqCase(event.target.value)}
                            >
                              <option className="option-hidden"></option>
                              <option>Case 1</option>
                              <option>Case 2</option>
                              <option>Case 3</option>
                            </select>
                            <label className="fs-16">Select Case</label>
                          </div>
                          {error && errorMessage.case && (
                            <small className="mt-3 text-danger">{errorMessage.case}</small>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-32">
                          <div className="outlined-input">
                            <textarea
                              name="enqQuery"
                              id="enqQuery"
                              className="w-100 resize-none"
                              placeholder=" "
                              value={enqMessage.trimStart().replace(/  +/g, ' ') || ''}
                              onChange={(event) => setEnqMessage(event.target.value.trimStart().replace(/  +/g, ' '))}
                              rows={3}
                            ></textarea>
                            <label>Discribe Your Issue</label>
                          </div>
                          {error && errorMessage.message && (
                            <small className="mt-2 text-danger">{errorMessage.message}</small>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-40">
                          <button
                            onClick={submitForm}
                            type="button"
                            className="button-blue text-white text-uppercase fw-700 fs-16 lh-20"
                            disabled={isSubmitted}
                          >
                            Submit free case evaluation
                          </button>
                        </div>
                      </div>
                    </form>
                    <div>
                      <span className="txt-lightgrey fs-14 lh-22 fw-400">
                        By submitting, you agree to our Terms &amp; Privacy Policy.
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
