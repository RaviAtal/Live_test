import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import homeImg from "../assets/images/svg/home_img.webp";
import pass_icon from "../assets/images/png/pass_icon.png";

const CloseMoreDeals = () => {
  return (
    <>
      <section className="mb-1 pb-md-3">
        <Container className="container_cus py-4 py-lg-5    ">
          <Row className=" justify-content-between align-items-center mb-5">
            <Col sm={6} lg={3}>
              <img className="w-100" src={homeImg} alt="homeImg" />
            </Col>
            <Col sm={6} lg={3} className="text-center text-sm-start mt-4">
              <p className="fs_16 fw-normal">
                Leverage big data and artificial intelligence to identify your
                next Client
              </p>
              <p className="fs_16 fw-normal text_light_brown mt-4 mt-sm-3">
                Compliment your current business development with Unconstrained
                predictive analytics.
              </p>
              <span className="bg_white position-relative px-4 py-3 rounded-3 d-inline-block mt-2">
                <div className="d-flex align-items-center">
                  <svg
                    width="23"
                    height="25"
                    viewBox="0 0 23 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 0L22.3253 6.25V18.75L11.5 25L0.674683 18.75V6.25L11.5 0Z"
                      fill="#1AD079"
                    />
                  </svg>
                  <p className="fs_16 fw-normal text_dark mb-0 ms-3">
                    Unconstrained
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <svg
                    width="23"
                    height="25"
                    viewBox="0 0 23 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 0L22.3253 6.25V18.75L11.5 25L0.674683 18.75V6.25L11.5 0Z"
                      fill="#E4F9EF"
                    />
                  </svg>
                  <p className="fs_16 fw-normal text_dark mb-0 ms-3">
                    Constrained
                  </p>
                </div>
                <div className="constrained_box position-absolute"></div>
                <div className="white_arrow position-absolute">
                  <svg
                    width="27"
                    height="32"
                    viewBox="0 0 27 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.555925 14.9649C-0.110958 15.3479 -0.113926 16.3089 0.550579 16.6961L25.2055 31.0603C25.871 31.448 26.7065 30.9695 26.7089 30.1994L26.7971 1.62402C26.7995 0.853852 25.9669 0.370191 25.2991 0.753769L0.555925 14.9649Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </span>
            </Col>
            <Col lg={3} className="text-center mt-4 mt-lg-0">
              <h4 className="fw-semibold fs_45 pb-md-4">
                Close <span className="d-lg-block"> More</span> Deals
              </h4>
              <a
                href="#"
                className="fs_16 fw-semibold text_green mt-4 mt-lg-5 d-inline-block"
              >
                Book a demo
                <img
                  className="ms-2 anim_rotate"
                  src={pass_icon}
                  alt="pass_icon"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CloseMoreDeals;
