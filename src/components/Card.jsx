import React from "react";
import imageHeaderDesktop from "../assets/images/image-header-desktop.jpg";

function Card() {
  return (
    <>
      <div className="item text">
        <h1>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="stats">
          <div className="flex-item 1">
            <h2>10k+</h2>
            <p>COMPANIES</p>
          </div>
          <div className="flex-item 2">
            <h2>314</h2>
            <p>TEMPLATES</p>
          </div>
          <div className="flex-item 3">
            <h2>12M+</h2>
            <p>QUERIES</p>
          </div>
        </div>
      </div>
      <div className="item my-image-container">
        <img
          src={imageHeaderDesktop}
          alt="desktop image"
          className="my-image"
        />
        <div className="overlay"></div>
      </div>
    </>
  );
}
export default Card;
