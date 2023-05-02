import React from "react";
import { Col, Row } from "react-bootstrap";
import earthImg from "../assets/images/svg/earth_img.svg";
import worldMap from "../assets/images/svg/world_map.webp";
import earthMap from "../assets/images/svg/earth_map_img.svg";

const YourTargetMarket = () => {
  return (
    <>
      <section>
        <div className="container_cus">
          <Row className="py-5 my-5 flex-column-reverse flex-lg-row">
            <Col
              lg={6}
              className="mt-5 text-center d-flex align-items-center flex-column text-lg-start align-items-lg-start"
            >
              <h2 className="fs_45 fw-semibold">Your Target Market</h2>
              <p className="fs_16 fw-normal mb-0 d-flex align-items-center mt-3">
                <img className="pe-2" src={earthImg} alt="earthImg" />
                Nationwide coverageNationwide coverage
              </p>
              <p className="fs_16 fw-normal text_dark mt-2">
                It is a long established fact that a reader will be
                <span className="d-lg-block">
                  distracted by the readable content of a page when
                </span>
                <span className="d-lg-block">
                  looking at its layout. The point of using Lorem Ipsum is
                </span>
                that it has a more-or-less normal distribution of letters.
              </p>
              <a
                href="#"
                className="fs_16 fw-normal getstarted_btn text-white mt-3 d-inline-block"
              >
                Get started
              </a>
            </Col>
            <Col
              lg={6}
              className="d-lg-flex justify-content-lg-end mt-5 position-relative ps-lg-5"
            >
              <img className="w-100 ps-lg-5" src={worldMap} alt="worldMap" />
              <img
                className="position-absolute l_50per_t_-40 w-25 earthMap_animation"
                src={earthMap}
                alt="earthMap"
              />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default YourTargetMarket;
