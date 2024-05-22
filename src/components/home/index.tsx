"use client"
import { NextPage } from "next";
import JoinUs from "./joinus";
import PartneredLeaders from "./patners";
import Features from "./features";
import HowItWorks from "./work";
import FAQ from "./faq";
import DownloadApp from "./download";
import Footer from "./footer";



const HomeComponent: NextPage = () => {
  return (
    <div>
      <Features />
      <HowItWorks />
      <JoinUs />
      <PartneredLeaders />
      <FAQ/>
      <DownloadApp/>
      <Footer/>
    </div>
  );
};

export default HomeComponent;
