import React, { useRef, useEffect } from "react";
import fullpage from "fullpage.js";

import Welcome from "./Components/Welcome/Welcome";
import HowItWorks from "./Components/Sections/HowItWorks/HowItWorks";
import Activation from "./Components/Sections/Activation/Activation";
import Features from "./Components/Sections/Features/Features";
import Gallery from "./Components/Sections/Gallery/Gallery";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SnapiDot from "./Components/SnapiDot/SnapiDot";

import "./styles.css";
import "./App.css";

const LandingPage: React.FC = () => {
  useEffect(() => {
    window.location.replace("/#One");
  }, []);

  const [activeSection, setActiveSection] = React.useState(0);

  const fullpageRef = useRef(null);

  useEffect(() => {
    if (fullpageRef.current) {
      new fullpage(fullpageRef.current, {
        anchors: ["One", "Two", "Three", "Four", "Five"],
        scrollOverflow: true,
        scrollingSpeed: 1,
        afterLoad: function (origin, destination) {
          setActiveSection(destination.index);
          console.log(activeSection);
        },
        onLeave: function (origin, destination) {
          setActiveSection(destination.index);
        }
      });
    }
  }, []);

  return (
    <>
      <div className="section-wrap" ref={fullpageRef}>
        <div className="section">
          <Welcome />
        </div>
        <div className="section">
          <HowItWorks />
        </div>
        <div className="section">
          <Activation />
        </div>
        <div className="section">
          <Features />
        </div>
        <div className="section">
          <Gallery />
        </div>
      </div>
      <Nav active={activeSection} setActive={setActiveSection} />
      <Header active={activeSection} />
      <Footer />
      <SnapiDot />
    </>
  );
};

export default LandingPage;
