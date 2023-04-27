import React from "react";
import footer_logo from "../assets/images/png/footer_logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg_footer">
        <section className="mx-3">
          <div className="container_cus py-5 ">
            <div className="row justify-content-between">
              <div className="col-lg-7 mt-3 mt-lg-0">
                <form className="row">
                  <div className=" mt-3 mt-md-0 col-md-6">
                    <input
                      className=" bg_blue_light w-100 ff_Segoe fw-semibold text-white opacity-75 border-0 py-2 px-2"
                      // id="MyName"
                      name="full  name"
                      // onChange={handleInput}
                      // value={myformData.fullname}
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className=" bg_blue_light w-100 ff_Segoe fw-semibold text-white opacity-75 border-0 py-2 px-2 mt-2"
                      id="email"
                      name="email"
                      // onChange={handleInput}
                      // value={myformData.fullname}
                      type="email"
                      placeholder="Email"
                    />
                    {/* radio */}
                    <div className="d-flex mt-2">
                      <div className="col-6 border_2_green py-2 radio_force">
                        <input
                          className=" bg_blue_light ff_Segoe fw-semibold text-white opacity-75 rounded-5 py-2 px-2 ms-2"
                          id="Financial Services"
                          name="Financial Services"
                          // onChange={handleInput}
                          // value={myformData.fullname}
                          type="radio"
                          value="Financial Services"
                        />
                        <label
                          className="ms-2 ff_Segoe fw-semibold fs_16 text-white opacity-75 text-nowrap"
                          for="Financial Services"
                        >
                          Financial Services
                        </label>
                      </div>
                      <div className="col-6">
                        <div className="border_2_green py-2 ms-2 text-center radio_force">
                          <input
                            className=" bg_blue_light ff_Segoe fw-semibold text-white opacity-75 rounded-5 py-2 px-2 ms-2"
                            id="Real Estate"
                            name="Real Estate"
                            // onChange={handleInput}
                            // value={myformData.fullname}
                            type="radio"
                            value="Real Estate"
                          />
                          <label
                            className="ms-2 ff_Segoe fw-semibold fs_16 text-white opacity-75 text-nowrap "
                            for="Real Estate"
                          >
                            Real Estate
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-3 mt-md-0 col-md-6 ms-md-2">
                    <textarea
                      placeholder="Message.."
                      cols="35"
                      rows="3"
                      className="bg_blue_light border-0 p-2 ff_Segoe fw-semibold text-white opacity-75 w-100"
                    ></textarea>{" "}
                    <button type="submit" className="submit_btn w-100">
                      submit
                    </button>
                  </div>
                </form>
              </div>
              {/* ghfgh */}
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
          <div className="container_cus py-5 ">
            <div className="row">
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
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
