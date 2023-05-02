import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import card1 from "../assets/images/svg//accor-1.webp";
import card2 from "../assets/images/svg/accor-2.webp";
import card3 from "../assets/images/svg/accor-3.webp";
import card4 from "../assets/images/svg/accor-4.webp";

const HowStarted = () => {
  const [image, setImage] = useState(1);
  const [activeNumber, setActiveNumber] = useState(1);

  return (
    <section className="overflow-hidden">
      <div className="container_cus_1410 bg_dark_blue rounded-4  my-5 py-5">
        <div className="container_cus">
          <h4 className="text-white text-center fs_45 fw-semibold">
            How to get started?
          </h4>
          <div className="row_cus py-3 py-sm-5 justify-content-between align-items-center mr-0">
            <Col md={6} className="">
              <Accordion defaultActiveKey="0">
                <Accordion.Item
                  className="rounded-3"
                  eventKey="0"
                  onClick={() => setActiveNumber(1)}
                >
                  <Accordion.Header onClick={() => setImage(1)}>
                    <p
                      className={
                        activeNumber === 1 ? "accor_active" : "accor_nub"
                      }
                    >
                      01
                    </p>
                    <p className="ps-3 ps-lg-5 fs_24 fw-semibold text-white">
                      Provide your information
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="pt-0">
                    <p className="ps-3 ps-lg-5 ms-4 mb-0">
                      Provide a zip code and we will provide you with the
                      highest propensity prospects in a 50 mile radius.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  className="rounded-3"
                  eventKey="1"
                  onClick={() => setActiveNumber(2)}
                >
                  <Accordion.Header onClick={() => setImage(2)}>
                    <p
                      className={
                        activeNumber === 2 ? "accor_active" : "accor_nub"
                      }
                    >
                      02
                    </p>
                    <p className="ps-3 ps-lg-5 fs_24 fw-semibold text-white">
                      Select your location
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="pt-0">
                    <p className="ps-3 ps-lg-5 ms-4 mb-0">
                      Provide a zip code and we will provide you with the
                      highest propensity prospects in a 50 mile radius.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  className="rounded-3"
                  eventKey="3"
                  onClick={() => setActiveNumber(3)}
                >
                  <Accordion.Header onClick={() => setImage(3)}>
                    <p
                      className={
                        activeNumber === 3 ? "accor_active" : "accor_nub"
                      }
                    >
                      03
                    </p>
                    <p className="ps-3 ps-lg-5 fs_24 fw-semibold text-white">
                      Purchase your subscription
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="pt-0">
                    <p className="ps-3 ps-lg-5 ms-4 mb-0">
                      Provide a zip code and we will provide you with the
                      highest propensity prospects in a 50 mile radius.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  className="rounded-3"
                  eventKey="4"
                  onClick={() => setActiveNumber(4)}
                >
                  <Accordion.Header onClick={() => setImage(4)}>
                    <p
                      className={
                        activeNumber === 4 ? "accor_active" : "accor_nub"
                      }
                    >
                      04
                    </p>
                    <p className="ps-3 ps-lg-5 fs_24 fw-semibold text-white">
                      Access your dashboard
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="pt-0">
                    <p className="ps-3 ps-lg-5 ms-4 mb-0">
                      Provide a zip code and we will provide you with the
                      highest propensity prospects in a 50 mile radius.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={5} className="ps-md-0 mt-4 mt-md-0 ">
              <img
                className={image == 1 ? "d-block w-100" : "d-none w-100"}
                src={card1}
                alt="cards"
              />
              <img
                className={image == 2 ? "d-block w-100" : "d-none w-100"}
                src={card2}
                alt="cards"
              />
              <img
                className={image == 3 ? "d-block w-100" : "d-none w-100"}
                src={card3}
                alt="cards"
              />
              <img
                className={image == 4 ? "d-block w-100" : "d-none w-100"}
                src={card4}
                alt="cards"
              />
              <div className="d-flex flex-column-reverse flex-sm-row align-items-sm-center justify-content-between mt-4">
                <span className="position-relative">
                  <a
                    href="/"
                    className="mt-3 z_index_1 mt-sm-0 sign_up_btn bg_green fs_16 fw-semibold text-white d-inline-block text-nowrap"
                  >
                    Sign up
                  </a>
                </span>
                <a
                  href="/"
                  className="fs_16 fw-normal clr_light_dark d-block ps-md-3"
                >
                  Register in under 5 minutes.
                </a>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowStarted;
