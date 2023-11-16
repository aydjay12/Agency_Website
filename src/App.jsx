import "./App.css";
import React, { useState, useEffect } from "react";
import ExpandLessIcon from "./assets/expandless.png";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

const App = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;
  const [showButton, setShowButton] = useState(false);

  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  // Add a scroll event listener to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        // Show the button when the user has scrolled down 100px
        setShowButton(true);
      } else {
        // Hide the button when the user is at the top of the page
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Router basename="/Agency_Website">
        <Container>
          <Navbar />
          <Intro />
          <IntoShape />
        </Container>
        <Container>
          <Feature />
          <FeatureShape />
        </Container>
        <Container>
          <Service />
          {!smallScreen && <ServiceShape />}
        </Container>
        <Container>
          <Price />
          <PriceShape />
        </Container>
        <Container>
          <Contact />
          <Footer />
        </Container>
      </Router>
      {showButton && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          <img src={ExpandLessIcon} alt="Back to Top" width="40" height="40" />
        </button>
      )}
    </div>
  );
};

export default App;
