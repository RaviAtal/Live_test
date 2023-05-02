import React, { useState } from "react";
import play_white_img from "../assets/images/svg/play_white_img.svg";
import { Modal } from "react-bootstrap";

const WatchADemo = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="py-1 position-relative">
        <div className="custom_container py-4 py-lg-5 mb-5 position-relative">
          <div className=" blure_green_3 position-absolute anim_green_blue d-none d-lg-flex"></div>
          <div className=" blure_blue_2 position-absolute anim_green_blue d-none d-lg-flex"></div>
          <div className="WatchADemo_bgimg py-5">
            <div className="py-lg-5 text-center d-flex flex-column align-items-center justify-content-center h-100">
              <p className="fs_49 fw-semibold text-white">Watch a demo</p>
              <img
                onClick={handleShow}
                variant="primary"
                className="cursor_pointer"
                height={65}
                width={65}
                src={play_white_img}
                alt="play_white_img"
              />
              <p className="fs_17 fw-semibold text-white pt-4">
                Catalyze AI is a predictive analytics business development
                platform
              </p>
            </div>
          </div>
        </div>
        <div className=" container">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title className=" ff_Segoe">Watch a demo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe
                width="640"
                height="360"
                src="https://youtu.be/1VMI7nffU-Q"
                title="Blue Sky Screensaver (No Sound) - 10 Hours 4K UHD"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Modal.Body>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default WatchADemo;
