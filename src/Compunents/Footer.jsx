import React, { useState, useEffect } from "react";
import footer_logo from "../assets/images/png/footer_logo.png";
import line_footer from "../assets/images/png/Line _footer_img.png";

const Footer = () => {
  const myValue = {
    fullname: "",
    email: "",
    textarea: "",
    radial_one: "",
  };
  const [myformData, setMyformData] = useState(myValue);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMyformData({ ...myformData, [name]: value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    setMyformData(myValue);
    console.log(myformData);
  };
  const Top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backTop, setbackTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 400) {
        setbackTop(true);
      } else {
        setbackTop(false);
      }
    });
  });
  return (
    <>
      <footer className="bg_footer position-relative">
        <section className="mx-3 mb-2">
          <div className="container_cus py-5 ">
            <div className="row justify-content-between">
              <div className="col-lg-7 mt-3 mt-lg-0">
                <form className="row" onSubmit={formSubmit}>
                  <div className=" mt-3 mt-md-0 col-lg-6">
                    <input
                      required
                      className=" bg_blue_light w-100 ff_Segoe fw-semibold text-white opacity-75 border-0 py-2 px-2"
                      id="MyName"
                      name="fullname"
                      onChange={handleInput}
                      value={myformData.fullname}
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      required
                      className=" bg_blue_light w-100 ff_Segoe fw-semibold text-white opacity-75 border-0 py-2 px-2 mt-2"
                      id="email"
                      name="email"
                      onChange={handleInput}
                      value={myformData.email}
                      type="email"
                      placeholder="Email"
                    />
                    {/* radio */}
                    <div className="d-flex mt-2">
                      <div className=" text-nowrap col-6 border_2_white py-2 radio_force">
                        <input
                          required
                          className=" bg_blue_light ff_Segoe fw-semibold text-white opacity-75 rounded-5 py-2 px-2 ms-1"
                          id="option1"
                          name="radial_one"
                          onChange={handleInput}
                          value="Financial Services"
                          type="radio"
                          checked={
                            myformData.radial_one === "Financial Services"
                          }
                        />
                        <label
                          className="ms-1 ff_Segoe fw-semibold fs_16 text-white opacity-75 text-nowrap on_force_green text-nowrap"
                          for="Financial Services"
                        >
                          Financial Services
                        </label>
                      </div>
                      <div className=" text-nowrap col-6">
                        <div className="border_2_white py-2 ms-2 text-center radio_force">
                          <input
                            required
                            className=" bg_blue_light ff_Segoe fw-semibold text-white opacity-75 rounded-5 py-2 px-2 ms-2 on_focus_bg_green"
                            id="option2"
                            name="radial_one"
                            onChange={handleInput}
                            value="Real Estate"
                            type="radio"
                            checked={myformData.radial_one === "Real Estate"}
                          />
                          <label
                            className="ms-2 ff_Segoe fw-semibold fs_16 text-white opacity-75 text-nowrap on_force_green"
                            for="Real Estate"
                          >
                            Real Estate
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* gcgcg */}
                  <div className=" mt-3 mt-md-0 col-lg-6 ps-0">
                    <textarea
                      placeholder="Message.."
                      cols="35"
                      rows="3"
                      onChange={handleInput}
                      value={myformData.textarea}
                      name="textarea"
                      className="bg_blue_light border-0 p-2 ff_Segoe fw-semibold text-white opacity-75 w-100"
                    ></textarea>
                    <button type="submit" className="submit_btn w-100">
                      submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 mt-3 mt-lg-0">
                <h5 className=" ff_Segoe fs_40 fw-semibold text-white m-0">
                  Contact us
                </h5>
                <p className=" ff_Segoe m-0 fs_16 fw-normal text-white opacity-75 pt_22 col-lg-10">
                  Our Predictive Analytics utilize a combination of event-driven
                  data, historical data.
                </p>
              </div>
            </div>
          </div>
          <hr className="hr_footer" />
          <div className="container_cus py-5 position-relative">
            <div className="row ">
              <div className=" mt-3 my-lg-0 col-sm-6 col-lg-4">
                <li>
                  <a href="#">
                    <img src={footer_logo} alt="footer_logo" />
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className=" ff_segoe fs_16 fw-semibold text-white"
                    href="mailto:raviatal44@gmail.com"
                  >
                    info@catalyzeai.com
                  </a>
                </li>
                <li className=" ">
                  <a
                    className=" ff_segoe fs_16 fw-semibold text-white"
                    href="tel:+001"
                  >
                    (941) 867-1761
                  </a>
                </li>
              </div>
              <div className=" mt-3 my-lg-0 col-sm-6 col-lg-3">
                <li>
                  <a
                    className=" ff_segoe fs_16 fw-semibold text-white"
                    href="#"
                  >
                    Real Estate{" "}
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className=" ff_segoe fs_16 fw-semibold text-white"
                    href="#"
                  >
                    Pricing{" "}
                  </a>
                </li>
                <li className=" ">
                  <a
                    className=" ff_segoe fs_16 fw-semibold text-white"
                    href="#"
                  >
                    Blog{" "}
                  </a>
                </li>
              </div>
              <div className=" mt-3 my-lg-0 col-sm-6 col-lg-3">
                <li>
                  <a
                    className=" ff_segoe fs_16 fw-semibold text-white"
                    href="#"
                  >
                    Financial Services
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className=" ff_segoe fs_16 fw-semibold text-white"
                    href="#"
                  >
                    Pricing{" "}
                  </a>
                </li>
                <li className=" ">
                  <a
                    className=" ff_segoe fs_16 fw-semibold text-white"
                    href="#"
                  >
                    Blog{" "}
                  </a>
                </li>
              </div>
              <div className=" mt-3 my-lg-0 col-sm-6 col-lg-1">
                <li>
                  <a
                    className=" ff_segoe fs_16 fw-semibold text-white"
                    href="#"
                  >
                    LinkedIn
                  </a>
                </li>
              </div>
            </div>
            {/* dssdfdfs bavk to top */}

            <img
              onClick={() => Top()}
              className={
                backTop
                  ? "position-absolute pos_line z_index_2 d-none d-lg-flex anim_line cursor_pointer"
                  : "d-none"
              }
              src={line_footer}
              alt="line_footer"
            />

            <div className="row mt-5">
              <div className="col-md-6 mt-3 mt-lg-0 col-lg-4">
                <a
                  className=" ff_Segoe fw-normal fs_14 text-white opacity-75"
                  href="#"
                >
                  All rights reserved.©20022 Catalyze AI
                </a>
              </div>
              <div className="col-md-6 mt-3 mt-lg-0 col-lg-4">
                <a
                  className=" text-decoration-underline ff_Segoe fw-normal fs_14 text-white opacity-75"
                  href="#"
                >
                  Do not sell my data
                </a>
              </div>
              <div className="col-md-6 mt-3 mt-lg-0 col-lg-2">
                <a
                  className=" text-decoration-underline ff_Segoe fw-normal fs_14 text-white opacity-75"
                  href="#"
                >
                  Terms & Conditions
                </a>
              </div>
              <div className="col-md-6 mt-3 mt-lg-0 col-lg-2">
                <a
                  className=" text-decoration-underline ff_Segoe fw-normal fs_14 text-white opacity-75"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="footer_white_circle position_set d-none d-lg-flex"></div>
      </footer>
    </>
  );
};

export default Footer;
