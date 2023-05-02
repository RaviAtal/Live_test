import React, { useState } from "react";
import inc_rs from "../assets/images/png/inc_rs.png";
import hut from "../assets/images/png/hut_img.png";
import logo_logo from "../assets/images/png/logo_logo.png";
import nav_logo from "../assets/images/png/logo_nav.png";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  if (showNav) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <>
      <nav className="m-3 bg-white z_index_2">
        <div className="container_cus py_22">
          <div className="d-flex align-items-center justify-content-between">
            <div className=" d-flex align-items-center ">
              <a href="/">
                <img src={nav_logo} alt="nav_logo" />
              </a>
              <div className="d-none d-md-flex align-items-center ">
                <a href="/Financial" className="pl_84">
                  <li className=" d-flex align-items-center line_hover_nav position-relative text-nowrap">
                    <img src={inc_rs} alt="inc_rs" />
                    <p className="m-0 fs_16 fw-semibold text-black pl_10">
                      Financial Services
                    </p>
                  </li>
                </a>
                <a href="/Real_estate" className="pl_84">
                  <li className=" d-flex align-items-center line_hover_nav position-relative text-nowrap">
                    <img src={hut} alt="hut" />
                    <p className="m-0 fs_16 fw-semibold text-black pl_10">
                      Real Estate
                    </p>
                  </li>
                </a>
              </div>
            </div>
            <div className=" d-none d-lg-flex align-items-center gap-4">
              <a
                href="/sign_up"
                className="fs_16 fw-semibold text_green sign_up_normal sign_up_green_border_hover py_20 px-3 rounded-1 text-nowrap on_hover"
              >
                Sign up
              </a>
              <div className=" d-flex align-items-center sign_up_normal sign_up_green_border py_20 px-3 rounded-1 text-nowrap on_hover">
                <a href="/Log_in" className="fs_16 fw-semibold text_green">
                  Log in
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ms-4 arr_rig_left"
                  >
                    <path
                      d="M6.325 13.275C6.14167 13.0583 6.05 12.8127 6.05 12.538C6.05 12.2633 6.14167 12.034 6.325 11.85L8.175 10H1C0.71667 10 0.479003 9.904 0.287003 9.712C0.0950034 9.52 -0.000663206 9.28267 3.46021e-06 9C3.46021e-06 8.71667 0.0960036 8.479 0.288004 8.287C0.480004 8.095 0.717337 7.99934 1 8H8.175L6.325 6.15C6.125 5.95 6.025 5.71234 6.025 5.437C6.025 5.16167 6.125 4.92434 6.325 4.725C6.50834 4.525 6.73767 4.425 7.013 4.425C7.28834 4.425 7.51734 4.51667 7.7 4.7L11.3 8.3C11.4 8.4 11.471 8.50834 11.513 8.625C11.555 8.74167 11.5757 8.86667 11.575 9C11.575 9.13334 11.5543 9.25834 11.513 9.375C11.4717 9.49167 11.4007 9.6 11.3 9.7L7.7 13.3C7.5 13.5 7.26667 13.5917 7 13.575C6.73334 13.5583 6.50834 13.4583 6.325 13.275ZM10 18C9.71667 18 9.47934 17.9043 9.288 17.713C9.09667 17.5217 9.00067 17.284 9 17C9 16.7167 9.096 16.479 9.288 16.287C9.48 16.095 9.71734 15.9993 10 16H16V2H10C9.71667 2 9.479 1.904 9.287 1.712C9.095 1.52 8.99934 1.28267 9 1C9 0.71667 9.096 0.479003 9.288 0.287003C9.48 0.0950034 9.71734 -0.000663206 10 3.46021e-06H16C16.55 3.46021e-06 17.021 0.196004 17.413 0.588004C17.805 0.980003 18.0007 1.45067 18 2V16C18 16.55 17.804 17.021 17.412 17.413C17.02 17.805 16.5493 18.0007 16 18H10Z"
                      fill="#1AD079"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <button
              onClick={() => setShowNav(true)}
              className="btn border-0 d-lg-none"
            >
              <span className="bars"></span>
              <span className="bars"></span>
              <span className="bars"></span>
            </button>
          </div>
          {/* respove nav */}
          <div className={showNav ? "show_nav" : "hide_nav"}>
            <ul className="d-flex d-lg-none flex-column mb-5 align-items-center justify-content-center ps-0">
              <div className=" d-flex justify-content-between align-items-center w-100 mb-4">
                <a href="/">
                  <img src={nav_logo} alt="nav_logo" />
                </a>
                <button
                  onClick={() => setShowNav(false)}
                  className="btn btn-close p-3 rounded-5 text-white "
                ></button>
              </div>
              <div>
                <div className="d-md-none d-flex flex-column mt-4 mt-lg-5 gap-4">
                  <a href="/Financial" className=" ">
                    <li className=" d-flex align-items-center text-nowrap">
                      <img src={inc_rs} alt="inc_rs" />
                      <p className="m-0 fs_16 fw-semibold text-black pl_10">
                        Financial Services
                      </p>
                    </li>
                  </a>
                  <a href="/Real_estate" className=" ">
                    <li className=" d-flex align-items-center text-nowrap">
                      <img src={hut} alt="hut" />
                      <p className="m-0 fs_16 fw-semibold text-black pl_10">
                        Real Estate
                      </p>
                    </li>
                  </a>
                </div>
                <div className=" d-lg-none d-flex flex-column gap-4">
                  <a
                    href="/sign_up"
                    className="fs_16 fw-semibold text_green border_cus py_20 px-3 rounded-1 text-nowrap mt-4 mt-md-0"
                  >
                    Sign up
                  </a>
                  <div className="d-flex align-items-center border_cus py_20 px-3 rounded-1 text-nowrap">
                    <a href="/Log_in" className="fs_16 fw-semibold text_green">
                      Log in
                      <img className="pl_23" src={logo_logo} alt="logo_logo" />
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
