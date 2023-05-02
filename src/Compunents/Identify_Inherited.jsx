import React from "react";
import card_1img from "../assets/images/svg/card_1img.svg";
import card_2_bulding_img from "../assets/images/svg/card_2_bulding_img.svg";
import card_3_img from "../assets/images/svg/card_3_img.svg";

const Identify_Inherited = () => {
  return (
    <>
      <section className=" position-relative">
        <div className="green_blur_2 position-absolute anim_green_blue d-none d-lg-flex"></div>
        <div className="container_cus py-4 py-lg-5">
          <div className="d-flex justify-content-center">
            <h2 className=" ff_Segoe fw-semibold fs_45 text-center col-lg-10 pe-1 m-0">
              Identify Inherited Properties in your local area that will sell
            </h2>
          </div>
          <p className="m-0 ff_Segoe fs_20 fw-normal col-6 col-lg-2 pt-4 pt-lg-5">
            Industry High Prediction Rate
          </p>
          <div className="row_cus justify-content-center mt-sm-3">
            {/* col-1 */}
            <div className="col-sm-6 col-lg-4 text-center mt-5 mt-sm-0">
              <p className="fw-semibold fs_40">40%</p>
              <img
                className="mt-2"
                width={191}
                height={143}
                src={card_1img}
                alt="carsImg1"
              />
              <div className="d-flex justify-content-center">
                <p className="ff_Segoe mb-0 fw-normal mt-4 mt-lg-5 col-lg-9">
                  Roughly 4 out of 10 property leads sell within 12 months.
                </p>
              </div>
            </div>
            {/* col-2 */}
            <div className="col-sm-6 col-lg-4 text-center mt-5 mt-sm-0 pt-sm-0">
              <p className="fw-semibold fs_40">
                $77<span className="fw-normal fs_32">Bn</span>
              </p>
              <img
                className="mt-2"
                width={192}
                height={149}
                src={card_2_bulding_img}
                alt="carsImg2"
              />
              <div className="d-flex justify-content-center">
                <p className="ff_Segoe mb-0 fw-normal mt-4 mt-lg-5 col-lg-8">
                  Predicted total property value that will sell per year.
                </p>
              </div>
            </div>
            {/* col-3 */}
            <div className="col-sm-6 col-lg-4 text-center mt-5 mt-lg-0">
              <p className="fw-semibold fs_40">77%</p>
              <img
                className="mt-2"
                width={187}
                height={164}
                src={card_3_img}
                alt="carsImg3"
              />
              <div className="d-flex justify-content-center">
                <p className="ff_Segoe mb-0 fw-normal mt-4 pt-2 col-lg-9">
                  Of recent seller contacted only one agent before finding the
                  right agent they worked with to sell their home.
                </p>
              </div>
            </div>
          </div>
          <hr
            className="line_over_header opacity-100 mt-lg-5 
            "
          />
        </div>
      </section>
    </>
  );
};

export default Identify_Inherited;
