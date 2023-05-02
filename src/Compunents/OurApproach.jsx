import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import bigData1 from "../assets/images/svg/bigData1.svg";
import bigData2 from "../assets/images/svg/bigData2.svg";
import bigData3 from "../assets/images/svg/bigData3.svg";
import bigData4 from "../assets/images/svg/bigData4.svg";

const OurApproach = () => {
  const [first, setfirst] = useState(1);

  return (
    <>
      <section>
        <div className="container_cus_1410">
          <div className="d-lg-flex w-100 text-white">
            <div className="w_lg_60 bg_dark_blue rounded-3 p-2 pb-4 p-md-5 w-100">
              <div className="container_cus_680">
                <Row className="pt-4">
                  <Col xs={6} sm={3} className="ps--0">
                    <div
                      onClick={() => setfirst(1)}
                      className={
                        first === 1
                          ? "our_approach_slider mx-1 cursor_pointer p_bg_change"
                          : "mx-1 cursor_pointer bg-transparent"
                      }
                    >
                      <p className="mb-0 fs_16 fw-semibold text-white p-2 m-3 ths_p d-inline-block">
                        1
                      </p>
                      <p className="fs_15 fw-semibold text-white ps-3 pb-3">
                        Big <span className="d-block">Data</span>
                      </p>
                    </div>
                  </Col>
                  <Col xs={6} sm={3}>
                    <div
                      onClick={() => setfirst(2)}
                      className={
                        first === 2
                          ? "our_approach_slider mx-1 cursor_pointer p_bg_change"
                          : "mx-1 cursor_pointer bg-transparent"
                      }
                    >
                      <p className="mb-0 fs_16 fw-semibold text-white p-2 m-3 ths_p d-inline-block">
                        2
                      </p>
                      <p className="fs_15 fw-semibold text-white ps-3 pb-3">
                        Event- <span className="d-block">Driven</span>
                      </p>
                    </div>
                  </Col>
                  <Col xs={6} sm={3}>
                    <div
                      onClick={() => setfirst(3)}
                      className={
                        first === 3
                          ? "our_approach_slider mx-1 cursor_pointer p_bg_change"
                          : "mx-1 cursor_pointer bg-transparent"
                      }
                    >
                      <p className="mb-0 fs_16 fw-semibold text-white p-2 m-3 ths_p d-inline-block">
                        3
                      </p>
                      <p className="fs_15 fw-semibold text-white ps-3 pb-3">
                        Artificial <span className="d-block">Intelligence</span>
                      </p>
                    </div>
                  </Col>
                  <Col xs={6} sm={3} className="pe--0">
                    <div
                      onClick={() => setfirst(4)}
                      className={
                        first === 4
                          ? "our_approach_slider mx-1 cursor_pointer p_bg_change"
                          : "mx-1 cursor_pointer bg-transparent"
                      }
                    >
                      <p className="mb-0 fs_16 fw-semibold text-white p-2 m-3 ths_p d-inline-block">
                        4
                      </p>
                      <p className="fs_15 fw-semibold text-white ps-3 pb-3">
                        Predictive <span className="d-block">Analytics</span>
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row
                  className={
                    first === 1
                      ? "bg_light_blue align-items-center rounded-3 d-flex py-lg-3 mt-3 w-100 ms_1"
                      : "ms_1 w-100 mt-3 py-lg-3 bg_light_blue align-items-center rounded-3 d-none"
                  }
                >
                  <Col sm={6}>
                    <img className="w-100" src={bigData1} alt="bigData1" />
                  </Col>
                  <Col sm={6}>
                    <p className="fs_20 fw-semibold text-white">Big Data</p>
                    <p className="fs_14 fw-semibold text-white opacity-75">
                      We gather hundreds of millions of data points in order to
                      perform advanced analytics to identify the highest
                      propensity prospects
                    </p>
                  </Col>
                </Row>
                <Row
                  className={
                    first === 2
                      ? "bg_light_blue align-items-center rounded-3 d-flex py-lg-3 mt-3 w-100 ms_1"
                      : "ms_1 w-100 mt-3 py-lg-3 bg_light_blue align-items-center rounded-3 d-none"
                  }
                >
                  <Col sm={6}>
                    <img className="w-100" src={bigData2} alt="bigData1" />
                  </Col>
                  <Col sm={6}>
                    <p className="fs_20 fw-semibold text-white">Big Data</p>
                    <p className="fs_14 fw-semibold text-white opacity-75">
                      We gather hundreds of millions of data points in order to
                      perform advanced analytics to identify the highest
                      propensity prospects
                    </p>
                  </Col>
                </Row>
                <Row
                  className={
                    first === 3
                      ? "bg_light_blue align-items-center rounded-3 d-flex py-lg-3 mt-3 w-100 ms_1"
                      : "ms_1 w-100 mt-3 py-lg-3 bg_light_blue align-items-center rounded-3 d-none"
                  }
                >
                  <Col sm={6}>
                    <img className="w-100" src={bigData3} alt="bigData1" />
                  </Col>
                  <Col sm={6}>
                    <p className="fs_20 fw-semibold text-white">Big Data</p>
                    <p className="fs_14 fw-semibold text-white opacity-75">
                      We gather hundreds of millions of data points in order to
                      perform advanced analytics to identify the highest
                      propensity prospects
                    </p>
                  </Col>
                </Row>
                <Row
                  className={
                    first === 4
                      ? "bg_light_blue align-items-center rounded-3 d-flex py-lg-3 mt-3 w-100 ms_1"
                      : "ms_1 w-100 mt-3 py-lg-3 bg_light_blue align-items-center rounded-3 d-none"
                  }
                >
                  <Col sm={6}>
                    <img className="w-100" src={bigData4} alt="bigData1" />
                  </Col>
                  <Col sm={6}>
                    <p className="fs_20 fw-semibold text-white">Big Data</p>
                    <p className="fs_14 fw-semibold text-white opacity-75">
                      We gather hundreds of millions of data points in order to
                      perform advanced analytics to identify the highest
                      propensity prospects
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="w_ld_40 bg_dark_blue rounded-3 ms-lg-2 me-lg-3 py-5 pt-5 ps-3 p-md-5 mt-4 mt-lg-0">
              <div className="d-flex flex-column justify-content-between h-100">
                <p className="fs_42 fw-semibold text-white">
                  Our <span className="d-block">approach</span>
                </p>
                <div>
                  <p className="fs_42 fw-normal text-white">
                    200k<span className="fs_30">Properties</span>
                  </p>
                  <p className="fs_16 fw-normal text-white opacity-75">
                    of wealth will be transitioned in
                    <span className="d-lg-block"> the next 25 years.</span>
                  </p>
                  <button className="border-0 bg_green fs_16 fw-normal text-white rounded-1 p_15_62">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurApproach;
