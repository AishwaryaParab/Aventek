import React, { useEffect, useState } from "react";
import { slider } from "../data/slider";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const len = slider.length;

  const navigate = useNavigate();

  const prevClick = () => {
    if (slide === 0) {
      setSlide(len - 1);
    } else {
      setSlide((prev) => prev - 1);
    }
  };

  const nextClick = () => {
    if (slide === len - 1) {
      setSlide(0);
    } else {
      setSlide((prev) => prev + 1);
    }
  };

  const moveDot = (index) => {
    setSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => nextClick(), 3000);

    return () => {
      clearInterval(interval);
    };
  });

  const navigateto = () => {
    switch (slide) {
      case 0:
      case 1: {
        navigate("/coming-soon");
        break;
      }

      case 2: {
        navigate("/services");
        break;
      }

      case 3: {
        navigate("/contact");
        break;
      }

      default:
        break;
    }
  };

  return (
    <div className="slider">
      <FontAwesomeIcon
        className="arrow-head"
        onClick={prevClick}
        icon={faArrowAltCircleLeft}
      />

      {slider?.map((item, index) => {
        if (slide + 1 === item.id) {
          return (
            <div className="slide-img" key={item.id}>
              <div>
                <img
                  className={
                    slide + 1 === item.id ? "slide animate-slide" : "slide"
                  }
                  src={item.img}
                  onClick={navigateto}
                  loading="lazy"
                  alt=""
                />
              </div>

              <div className="dots-section">
                {slider.map((dot, dotIndex) => {
                  return (
                    <div
                      key={dot.id}
                      className={
                        slide + 1 === dot.id ? "dots active-dots" : "dots"
                      }
                      onClick={() => moveDot(dotIndex)}
                    ></div>
                  );
                })}
              </div>
            </div>
          );
        }

        return null;
      })}

      <FontAwesomeIcon
        className="arrow-head"
        onClick={nextClick}
        icon={faArrowAltCircleRight}
      />
    </div>
  );
};

export default Slider;
