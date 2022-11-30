import React, { useEffect, useState } from 'react';
import { slider } from '../data/slider';
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const len = slider.length;

  const prevClick = () => {
    if(slide == 0) {
      setSlide(len-1);
    }
    else {
      setSlide((prev) => prev - 1);
    }
  }

  const nextClick = () => {
    if(slide == len-1) {
      setSlide(0);
    }
    else {
      setSlide((prev) => prev + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => nextClick(), 3000);

    return () => {
      clearInterval(interval);
    }
  });

  return (
    <div className="slider">
        <FontAwesomeIcon className="arrow-head" onClick={prevClick} icon={faArrowAltCircleLeft} />

            {slider?.map((item, index) => {
              if((slide+1) == item.id) {
                return (
                  <div className="slide-img">
                    <img className={(slide+1) == item.id ? "slide animate-slide" : "slide"}  src={item.img} />
                    <div className="dots-section">
                      {slider.map((item) => {return <div className={(slide+1) == item.id ? "dots active-dots" : "dots"}></div>})}
                    </div>
                  </div>
                )
              }
            })}
        
        <FontAwesomeIcon className="arrow-head" onClick={nextClick} icon={faArrowAltCircleRight} />

    </div>
  )
}

export default Slider