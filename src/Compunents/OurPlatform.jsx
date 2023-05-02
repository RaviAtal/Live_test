import React from "react";
import diamand from "../assets/images/svg/dimand.svg";
import rail_path from "../assets/images/svg/rail_path.svg";
import dolor from "../assets/images/svg/dolor.svg";
import percentage from "../assets/images/svg/percentage.svg";
import dollor_card from "../assets/images/svg/dollor_card.svg";
import eye from "../assets/images/svg/eyw.svg";
import circle_per from "../assets/images/svg/circle_per.svg";
import letter_img from "../assets/images/svg/letter_img.svg";

export const OurPlatform = () => {
  return (
    <>
      <section className="py-5 mt-5 mt-sm-2 z_index_1">
        <div className="container_cus py-4 py-lg-5">
          <div className="row_cus">
            <div className=" col-md-3 ">
              <h3 className="fs_45 fw-semibold mb-4 mb-md-0 text-black">
                Our Platform
              </h3>
            </div>
            <div className="col-md-9 ">
              <div className="row_cus">
                <div className=" col-md-6 px-md-1">
                  <div className=" h-100 bg_grey p-4 p-lg-5 d-flex flex-column justify-content-between rounded-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="fs_20 fw-semibold mb-0">Exclusive</p>
                      <img height={50} width={50} src={diamand} alt="diamand" />
                    </div>
                    <p className="fs_16 fw-normal text_grey mt-sm-5 pt-5 col-md-8 ">
                      200 exclusive prospects pushed to your platfrom monthly.
                    </p>
                  </div>
                </div>
                <div className=" col-md-6 px-md-1 mt-3 mt-md-0">
                  <div className=" h-100 bg_grey p-4 p-lg-5 d-flex flex-column justify-content-between rounded-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="fs_20 fw-semibold mb-0 col-3">
                        In your backyard
                      </p>
                      <img
                        height={50}
                        width={50}
                        src={rail_path}
                        alt="rail_path"
                      />
                    </div>
                    <p className="fs_16 fw-normal text_grey pt-5 col-md-11">
                      Radius based leads within 50-miles from you, prioritizing
                      those closer to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 ">
              <div className="row_cus">
                <div className="col-md-6 px-md-1 py-2 mt-2 mt-md-0">
                  <div className=" bg_grey p-4 p-lg-5 d-flex flex-column justify-content-between h-100 rounded-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="fs_20 fw-semibold col-3">High net worth</p>
                      <img width={75} height={61} src={dolor} alt="dolor" />
                    </div>
                    <p className="fs_16 fw-normal text_grey mt-md-5 pt-4 pt-md-5 col-md-9">
                      Average investable assets of $1.5 million.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 px-md-1 py-2">
                  <div className=" bg_grey p-4 p-lg-5 d-flex flex-column justify-content-between h-100 rounded-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="fs_20 fw-semibold col-3">High propensity</p>
                      <img
                        width={56}
                        height={56}
                        src={percentage}
                        alt="percentage"
                      />
                    </div>
                    <p className="fs_16 fw-normal text_grey mt-5 mt-sm-4 col-md-10">
                      Our combination of event-driven data, historical data,
                      behavioral analytics, and real-time data results in the
                      highest propensity prospects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-md-3">
              <a href="/">
                <img
                  className="pt-2 dollor_card_positions_h w-100 h-100"
                  src={dollor_card}
                  alt="dollor_card"
                />
              </a>
            </div>
          </div>
          <div className="row_cus mt_50 mt_-100_md justify-content-center">
            <div className="col-sm-6 col-md-4 text-center">
              <img src={eye} alt="eye" />
              <p className="fs_16 fw-normal">
                Harness the power of 30 million data points to reach your
                highest converting target market
              </p>
            </div>
            <div className="col-sm-6 col-md-4 text-center mt-4 mt-sm-0">
              <img src={circle_per} alt="circle_per" />
              <p className="fs_16 fw-normal">
                Increase your marketingdollars ROI
              </p>
            </div>
            <div className="col-sm-6 col-md-4 text-center mt-4 mt-md-0">
              <img src={letter_img} alt="letter_img" />
              <p className="fs_16 fw-normal mt-2">
                A top of funnel marketing solution to fill your prospect
                pipeline
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
