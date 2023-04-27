import React from "react";
import Nav from "./Nav";
import right_arrow from "../assets/images/png/right_arrow.png";
import top_arrow from "../assets/images/png/top_arrow.png";
import bottom_arrow from "../assets/images/png/botom_arrow.png";
import personimg from "../assets/images/png/personimg.png";

const Header = () => {
  return (
    <>
      <header className=" position-relative">
        <Nav />
        <div className=" position-absolute blure_green_1"></div>
        <div className=" position-absolute blure_blue_1 d-none d-md-flex"></div>
        <section className="py-3 py-lg-5 ">
          <div className="container_cus py-lg-4 position-relative">
            <div className="row">
              {/* imgggg*/}
              <div className="col-md-6 position-relative">
                <div className="h-100">
                  <div className=" anim position-absolute t_110r_65per box_Contacted box_shado_md_lg p-3">
                    <div className="d-flex">
                      <h6 className="m-0 ff_Segoe fs_14 fw-semibold">
                        Jordan Wentworth
                      </h6>
                      <p className=" px_2 rounded-1 ff_Segoe fs_10 fw-semibold bg_light_blue">
                        New
                      </p>
                    </div>
                    <p className=" py-2 m-0 ff_Segoe fs_14 text_green fw-semibold">
                      $1,293,200
                    </p>
                    <p className=" m-0 ff_Segoe fw-normal fs_14 text-black opacity-75 lh_13 fw-normal">
                      Boston, MA Inheritance
                    </p>
                    <div className="d-flex align-items-center mt-3">
                      <div className="check_bov"></div>
                      <p className="m-0 ff_Segoe fw-normal fs_10 text-black fw-semibold ms-2">
                        Contacted
                      </p>
                    </div>
                  </div>
                  <div className="anim position-absolute t_40_l65per box_Contacted_2 p-3 ">
                    <div className="d-flex justify-content-end align-items-center gap-1">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.93965 0.282689C4.61928 -0.607002 1.17468 1.38174 0.284992 4.70211C-0.604699 8.02248 1.38404 11.4671 4.70441 12.3568C8.02478 13.2465 11.4694 11.2577 12.3591 7.93734C13.2488 4.61697 11.26 1.17238 7.93965 0.282689ZM5.02793 11.1494C2.3656 10.436 0.779029 7.68796 1.4924 5.02563C2.20577 2.3633 4.95379 0.776726 7.61612 1.4901C10.2785 2.20347 11.865 4.95149 11.1517 7.61382C10.4383 10.2762 7.69027 11.8627 5.02793 11.1494ZM7.43269 3.38209L6.52713 3.13944L5.55656 6.76167L8.17818 9.53468L8.87144 8.87927L6.59153 6.52135L7.43269 3.38209Z"
                          fill="#FFA140"
                        />
                      </svg>
                      <p className="m-0 ff_segoe fs_8 fw-normal">2 days ago</p>
                    </div>
                    <p className="m-0 fw-normal fs_10 ff_Segoe my-2">
                      Mihail Lacusta
                    </p>
                    <p className=" pb-2 m-0 ff_Segoe fs_14 text_green fw-semibold">
                      $1,329,0139
                    </p>
                    <p className=" m-0 ff_Segoe fw-normal fs_8 text-black opacity-75 lh_13 fw-normal">
                      Business Sale
                    </p>
                    <div className="d-flex align-items-center mt-4">
                      <div className="check_bov"></div>
                      <p className="m-0 ff_Segoe fw-normal fs_10 text-black fw-semibold ms-2 ">
                        Contacted
                      </p>
                    </div>
                  </div>
                  <div className="anim position-absolute t_434_r_80per box_Active_3">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="m-0 fs_8 ff_Segoe fw-semibold ms-1">
                        Active leads
                      </p>
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="me-1"
                      >
                        <path
                          d="M4.09971 2.45079C4.02912 2.84 3.8447 3.19954 3.56977 3.48394C3.29484 3.76835 2.94176 3.96484 2.55516 4.04857C2.16856 4.1323 1.76581 4.09951 1.39785 3.95434C1.02988 3.80918 0.713231 3.55816 0.487929 3.23303C0.262627 2.9079 0.138797 2.52327 0.132097 2.12776C0.125398 1.73226 0.236129 1.34365 0.45029 1.01107C0.664451 0.678499 0.972422 0.4169 1.33526 0.259357C1.69809 0.101813 2.0995 0.0554018 2.48871 0.12599C3.01063 0.220646 3.47357 0.518757 3.77569 0.954741C4.07781 1.39073 4.19436 1.92887 4.09971 2.45079Z"
                          fill="#1AD079"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="anim position-absolute t_20r_28per z_index_2">
                    <div className=" w_163px position-relative">
                      <img
                        className="position-absolute t_12per_l_5"
                        src={top_arrow}
                        alt="top_arrow"
                      />
                      <img
                        className=" position-absolute t_12per_r_5"
                        src={bottom_arrow}
                        alt="bottom_arrow"
                      />
                      <div className=" box_flot m-auto">
                        <div className="black_line"></div>
                        <div className="grey_line"></div>
                      </div>
                      <div className=" box_flot mt-3 m-auto">
                        <div className="grey_line"></div>
                        <div className="black_line"></div>
                      </div>
                    </div>
                  </div>
                  <div className="anim position-absolute t_171_r_187">
                    <div className="bg-white cierathonas_widdth px-3 py-3 rounded-3">
                      <div className="d-flex justify-content-between border_ccc">
                        <div className="d-flex align-items-start">
                          <img src={personimg} alt="personimg" />
                          <div className="ms-3">
                            <p className=" ff_Segoe fw-normal fs_10 mb-0">
                              Ciera Thomas
                            </p>
                            <p className=" ff_Segoe fw-normal fs_10 clr_edit_text">
                              Edit
                            </p>
                          </div>
                        </div>
                        <svg
                          width="4"
                          height="14"
                          viewBox="0 0 4 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.5 12C3.5 12.3978 3.34196 12.7794 3.06066 13.0607C2.77936 13.342 2.39782 13.5 2 13.5C1.60218 13.5 1.22064 13.342 0.93934 13.0607C0.658035 12.7794 0.5 12.3978 0.5 12C0.5 11.6022 0.658035 11.2206 0.93934 10.9393C1.22064 10.658 1.60218 10.5 2 10.5C2.39782 10.5 2.77936 10.658 3.06066 10.9393C3.34196 11.2206 3.5 11.6022 3.5 12ZM3.5 7C3.5 7.39782 3.34196 7.77936 3.06066 8.06066C2.77936 8.34196 2.39782 8.5 2 8.5C1.60218 8.5 1.22064 8.34196 0.93934 8.06066C0.658035 7.77936 0.5 7.39782 0.5 7C0.5 6.60218 0.658035 6.22064 0.93934 5.93934C1.22064 5.65804 1.60218 5.5 2 5.5C2.39782 5.5 2.77936 5.65804 3.06066 5.93934C3.34196 6.22064 3.5 6.60218 3.5 7ZM3.5 2C3.5 2.39782 3.34196 2.77936 3.06066 3.06066C2.77936 3.34196 2.39782 3.5 2 3.5C1.60218 3.5 1.22064 3.34196 0.93934 3.06066C0.658035 2.77936 0.5 2.39782 0.5 2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5C2.39782 0.5 2.77936 0.658035 3.06066 0.93934C3.34196 1.22064 3.5 1.60218 3.5 2Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="mt-2">
                        {/* 1 */}
                        <div className="d-flex justify-content-between align-items-center ">
                          <span className=" ff_Segoe fw-semibold fs_10">
                            1.
                          </span>
                          <div className="d-flex">
                            <div className="d-flex justify-content-between">
                              <div className="blck_line"></div>
                              <div className="green_line ms-1"></div>
                              <div className="blck_big_line ms-1"></div>
                            </div>
                            <svg
                              width="10"
                              height="6"
                              viewBox="0 0 10 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="ms_10"
                            >
                              <path
                                d="M5 5.47918C4.88889 5.47918 4.78112 5.45834 4.67667 5.41668C4.57223 5.37501 4.48556 5.31945 4.41667 5.25001L0.583338 1.41668C0.43056 1.2639 0.354172 1.06945 0.354172 0.833343C0.354172 0.597232 0.43056 0.402788 0.583338 0.25001C0.736116 0.0972321 0.930561 0.0208435 1.16667 0.0208435C1.40278 0.0208435 1.59723 0.0972321 1.75001 0.25001L5 3.50001L8.25 0.25001C8.40278 0.0972321 8.59723 0.0208435 8.83334 0.0208435C9.06945 0.0208435 9.26389 0.0972321 9.41667 0.25001C9.56945 0.402788 9.64584 0.597232 9.64584 0.833343C9.64584 1.06945 9.56945 1.2639 9.41667 1.41668L5.58334 5.25001C5.5 5.33334 5.40973 5.39251 5.3125 5.42751C5.21528 5.46251 5.11112 5.47973 5 5.47918Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                        {/* 2 */}
                        <div className="d-flex align-items-center">
                          <span className=" ff_Segoe fw-semibold fs_10 pe-3">
                            2.
                          </span>
                          <div className="d-flex ms-1">
                            <div className="second_blck_line"></div>
                            <div className="second_green_line ms-1"></div>
                          </div>
                        </div>
                        {/* 3 */}
                        <div className="d-flex align-items-center">
                          <span className=" ff_Segoe fw-semibold fs_10 pe-3">
                            2.
                          </span>
                          <div className="d-flex ms-1">
                            <div className="thirdblck_line"></div>
                            <div className="thirdgreen_line ms-1"></div>
                            <div className="third_thrd_blck_line ms-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="anim position-absolute t_256_r_167">
                    <div className="bg-white aveen_div">
                      <div className="p-2">
                        <p className=" ff_Segoe fw-normal fs_8 mb-1">
                          5500 72nd Ave N
                        </p>
                        <p className=" ff_Segoe fw-semibold fs_8 clr_green mb-1">
                          $150,000
                        </p>
                        <p className=" ff_Segoe fw-normal clr_4d4d4d fs_5 col-6 m-0">
                          Pinellas Park, FL inheritance
                        </p>
                      </div>
                      <svg
                        width="97"
                        height="23"
                        viewBox="0 0 97 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask id="path-1-inside-1_202_2" fill="white">
                          <path d="M0 0H97V23H0V0Z" />
                        </mask>
                        <path d="M0 0H97V23H0V0Z" fill="#E4F9EF" />
                        <path
                          d="M0 1H97V-1H0V1Z"
                          fill="#1AD079"
                          mask="url(#path-1-inside-1_202_2)"
                        />
                        <path
                          d="M49.5197 14.6146C49.3848 14.4798 49.3201 14.3168 49.3255 14.1258C49.3309 13.9348 49.4012 13.7719 49.5365 13.6371L51.441 11.7326H43.9242C43.7332 11.7326 43.5729 11.6678 43.4435 11.5384C43.3141 11.409 43.2496 11.249 43.25 11.0584C43.25 10.8674 43.3147 10.7072 43.4442 10.5777C43.5736 10.4483 43.7336 10.3838 43.9242 10.3843H51.441L49.5197 8.46291C49.3848 8.32808 49.3174 8.16785 49.3174 7.98223C49.3174 7.79662 49.3848 7.63662 49.5197 7.50223C49.6545 7.3674 49.8147 7.29999 50.0003 7.29999C50.186 7.29999 50.346 7.3674 50.4803 7.50223L53.5646 10.5865C53.632 10.6539 53.6799 10.7269 53.7082 10.8056C53.7365 10.8843 53.7505 10.9685 53.75 11.0584C53.75 11.1483 53.7358 11.2326 53.7075 11.3112C53.6792 11.3899 53.6316 11.4629 53.5646 11.5303L50.4635 14.6314C50.3399 14.755 50.1855 14.8168 50.0003 14.8168C49.8152 14.8168 49.655 14.7494 49.5197 14.6146Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* blue_circle */}
                  <div className="blue_circle position-absolute"></div>
                  {/* light_brown_circle */}
                  <div className="light_brown_circle position-absolute t_0r_100"></div>
                  <div className="row align-content-end z_index_2 pt_448">
                    <div className="col-4">
                      <div className="h-100">
                        <h3 className="fs_24 m-0 ff_Segoe fw-semibold text-center">
                          400mm+
                        </h3>
                        <p className="m-0 pt-4 text-center fs_16 ff_Segoe fw-normal">
                          Data point used for analytics
                        </p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="h-100">
                        <h3 className="fs_24 m-0 ff_Segoe fw-semibold text-center">
                          $3Tn
                        </h3>
                        <p className="m-0 pt-3 pt-sm-4 text-center fs_16 ff_Segoe fw-normal">
                          Investable assets predicted per year
                        </p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="h-100">
                        <h3 className="fs_24 m-0 ff_Segoe fw-semibold text-center">
                          $77Bn
                        </h3>
                        <p className="m-0 pt-3 pt-sm-4 text-center fs_16 ff_Segoe fw-normal col-10">
                          Predicted home value transacted per year
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* text*/}
              <div className="col-md-6 position-relative mt-5 m-md-0 ps-lg-5">
                <div className="h-100 ">
                  <h1 className=" ff_Segoe fw-semibold fs_55 m-0">
                    Grow your business with Event-Driven Predictive Analytics
                  </h1>
                  <p className=" m-0 ff_Segoe fw-normal fs_16 opacity-75 pt_15 col-sm-10 pr_6">
                    It is a long established fact that a reader will be
                    distracted by the using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it the look at
                    you.
                  </p>
                  <div className="d-flex col-lg-11 pr_7 mt-5">
                    <div className="col-6 bg_green rounded-1">
                      <div className="p-3 p-md-4 p-xl-5">
                        <p className=" ff_Segoe fs_16 fw-semibold text-white opacity-75 m-0">
                          boost your
                        </p>
                        <h6 className="ff_segoe fw-semibold fs_24 m-0 col-lg-11 text-white ">
                          Financial Services
                        </h6>
                        <div className="d-flex justify-content-between align-items-center mt_38">
                          <a
                            className=" ff_segoe fw-semibold fs_16 text-white"
                            href="#"
                          >
                            Learn more
                          </a>
                          <img src={right_arrow} alt="right_arrow" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 bg_blue rounded-1 ml_7">
                      <div className="p-3 p-md-4 p-xl-5">
                        <p className=" ff_Segoe fs_16 fw-semibold text-white opacity-75 m-0">
                          boost your
                        </p>
                        <h6 className="ff_segoe fw-semibold fs_24 m-0 col-11 text-white pb-5 pt-2">
                          Real Estate
                        </h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <a
                            className=" ff_segoe fw-semibold fs_16 text-white"
                            href="#"
                          >
                            Learn more
                          </a>
                          <img src={right_arrow} alt="right_arrow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" position-absolute blure_green_2 d-none d-lg-flex"></div>
        </section>
      </header>
    </>
  );
};

export default Header;
