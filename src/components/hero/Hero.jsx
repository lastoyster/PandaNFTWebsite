import React from "react";
import "./Hero.css";
import { BiLinkExternal } from "react-icons/bi";

function Hero() {
  return (
    <div className="hero row">
      <div className="hero-left">
        <h1>Discover a new era of Crypto Currency</h1>
      </div>

      <div className="hero-right-col">
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ad, neque.
        </p>
        <div className="row center gap">
          <h4>Get Started</h4>
          <BiLinkExternal />
        </div>
      </div>
    </div>
  );
}

export default Hero;
