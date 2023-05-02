import React from "react";
import Nav from "./Nav";
import pass_icon from "../assets/images/png/pass_icon.png";
import div_img from "../assets/images/svg/div_headerimg.svg";
import fram_card from "../assets/images/png/Frame_in_header_hero.png";
import over_view from "../assets/images/svg/over_view.svg";
import search_all_leads from "../assets/images/svg/search_all_leads.svg";

const Header = () => {
  return (
    <>
      <header className=" position-relative">
        <Nav />
        <div className=" position-absolute green_blue_1 d-none d-md-flex anim_green_blue overflow-hidden"></div>
        {/* hero section */}
        <section className=" position-relative">
          <div className="container_cus py-4 py-lg-5">
            <div className=" position-absolute blue_2 d-none d-md-flex overflow-hidden"></div>
            <div className="row_cus flex-column-reverse flex-lg-row align-items-lg-center pb-5">
              {/* text_part */}
              <div className="col-lg-6 mt-4 mt-lg-0">
                <h1 className=" ff_Segoe fw-semibold fs_60 col-lg-10 m-0">
                  Event-Driven Listing Leads
                </h1>
                <p className=" ff_Segoe fw-norml fs_16 pt-3 m-0 col-lg-10">
                  Not your average smart farming, not statistical analysis, but
                  actionable behaviors.
                </p>
                <div className="d-flex col-lg-10 mt-5 pt-5 align-items-center gap-5">
                  <div className="bg_green p_15_50 rounded-1">
                    <a
                      className=" ff_Segoe fs_16 text-white fw-normal "
                      href="/"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="cursor_pointer anima_parent">
                    <a
                      className=" ff_Segoe fs_16 fw-semibold text_green "
                      href="/"
                    >
                      Book a demo
                    </a>
                    <img
                      className="ps-3 anim_rotate"
                      src={pass_icon}
                      alt="pass_icon"
                    />
                  </div>
                </div>
              </div>
              {/* imp_part */}
              <div className="col-lg-6 position-relative ">
                <img className="w-100" src={div_img} alt="div_img" />
                <img
                  className=" position-absolute fram_card_positions fram_card_animtion"
                  src={fram_card}
                  alt="fram_card"
                />
                <img
                  className=" position-absolute over_view_position over_view_animation"
                  src={over_view}
                  alt="over_view"
                />
                <img
                  className=" position-absolute search_leades_position search_leades_animation"
                  src={search_all_leads}
                  alt="search_all_leads"
                />
              </div>
            </div>
            <div className="pt-lg-5"></div>
            <hr
              className="line_over_header opacity-100 mt-lg-5 
            "
            />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
