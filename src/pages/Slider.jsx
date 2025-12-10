import React, { useEffect, useRef, useState } from "react";
import firstSlider from "../images/products/boat110-1.png";
import secondSlider from "../images/products/firsSlider.png";
import thirdSlider from "../images/products/fourthSlider.png";
import fourthSlider from "../images/products/thirdSlider.png";
import sevenSlider from "../images/products/boat203-1.png";
import "./Slider.css"; 
import { Link } from "react-router-dom";

const Carousel = () => {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    let items = Array.from(track.children);

    const interval = setInterval(() => {
      const first = items.shift();
      items.push(first);
      track.innerHTML = ""; 
      items.forEach(item => track.appendChild(item)); 
      setCurrent(prev => (prev + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const totalSlides = 5;

  return (
    <div className="carousel-container bg-dark">
      <h1
        style={{ textAlign: "center", color: "white", marginTop: "50px", fontSize:50 }}
        className="pb-20"
      >
        Featured Products
      </h1>

      <div className="carousel-track" ref={trackRef}>
        <div className="carousel-item-custom">
          <p className="product_font_carousel">JBL Tune 760NC</p>
          <Link to="/Allproduct">
            <img src={firstSlider} alt="1" className="img-fluid" />
          </Link>
          <h4 className="product_font_head">
            ₹5,999{" "}
            <span className="text-muted muteddd">
              <s>₹7,999</s>
            </span>
          </h4>
        </div>

        <div className="carousel-item-custom">
          <p className="product_font_carousel">boAT Airdopes 203</p>
          <Link to="/Allproduct">
            <img src={secondSlider} alt="2" className="img-fluid" />
          </Link>
          <h4 className="product_font_head">
            ₹1,074{" "}
            <span className="text-muted muteddd">
              <s>₹3,999</s>
            </span>
          </h4>
        </div>

        <div className="carousel-item-custom">
          <p className="product_font_carousel">boAT Rockerz 518</p>
          <Link to="/Allproduct">
            <img src={thirdSlider} alt="3" className="img-fluid" />
          </Link>
          <h4 className="product_font_head">
            ₹1,299{" "}
            <span className="text-muted muteddd">
              <s>₹3,999</s>
            </span>
          </h4>
        </div>

        <div className="carousel-item-custom">
          <p className="product_font_carousel">boAT Rockerz 255</p>
          <Link to="/Allproduct">
            <img src={fourthSlider} alt="4" className="img-fluid" />
          </Link>
          <h4 className="product_font_head">
            ₹899{" "}
            <span className="text-muted muteddd">
              <s>₹2,999</s>
            </span>
          </h4>
        </div>

        <div className="carousel-item-custom">
          <p className="product_font_carousel">JBL Endurance Run</p>
          <Link to="/Allproduct">
            <img src={sevenSlider} alt="5" className="img-fluid" />
          </Link>
          <h4 className="product_font_head">
            ₹15,999{" "}
            <span className="text-muted muteddd">
              <s>₹27,999</s>
            </span>
          </h4>
        </div>
      </div>

      <div className="dots-container">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;