import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Identify_Inherited from "../Identify_Inherited";
import WatchADemo from "../WatchADemo";
import { OurPlatform } from "../OurPlatform";
import OurApproach from "../OurApproach";
import CloseMoreDeals from "../CloseMoreDeals";
import HowStarted from "../HowStarted";
import SeeWhatOur from "../SeeWhatOur ";
import YourTargetMarket from "../YourTargetMarket";

const Main = () => {
  return (
    <>
      <Header />
      <Identify_Inherited />
      <WatchADemo />
      <OurPlatform />
      <OurApproach />
      <CloseMoreDeals />
      <HowStarted />
      {/* <SeeWhatOur /> */}
      <YourTargetMarket />
      <Footer />
    </>
  );
};

export default Main;
