import React, { useEffect, useRef, useState } from "react";

import "./Slider.scss";
import descriptionList from "@/data/descriptionList.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Slider() {
  const sliderRef = useRef();
  const wrapperRef = useRef();
  const [widthSlider, setWidthSlider] = useState();

  useEffect(() => {
    if (sliderRef) {
      setWidthSlider(-sliderRef.current.scrollWidth - window.innerWidth);
    }
  }, [sliderRef, window.innerWidth]);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if ((sliderRef, wrapperRef)) {
      gsap.to(sliderRef.current, {
        xPercent: -50,
        duration: 3,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => `-=${widthSlider}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }
  }, [widthSlider]);

  return (
    <section className="slider__wrapper" ref={wrapperRef}>
      <div className="slider" ref={sliderRef}>
        <div className="description">
          <ul className="about-info">
            {descriptionList.map((currD, i) => (
              <li key={`about-info--${i}`} className="about-info__item">
                <span className="secondary about-info__name body-text-secondary">
                  {currD.name}
                </span>
                <span className="about-info__key bold">{currD.key}</span>
              </li>
            ))}
          </ul>

          <div className="title">
            <p className="secondary">A home away from home</p>
            <h1 className="big-text">Showroom</h1>
          </div>

          <p className="description__bottom">
            It is the balanced symbiosis of sustainable design, largely natural
            materials and monochrome color worlds that .PEAM stands for. Making
            this world not only visible, but also tangible was the basis for the
            design of our showroom. The result: an authentic, grounded and yet
            inviting space. A place for product presentation, for meetings and
            conversations.
          </p>
        </div>

        <div className="slider__images">
          <img
            src="/images/slider/1.webp"
            alt="slider"
            className="slider__image slider__image-1"
          />
          <img
            src="/images/slider/2.webp"
            alt="slider"
            className="slider__image slider__image-2"
          />
          <img
            src="/images/slider/3.webp"
            alt="slider"
            className="slider__image slider__image-3"
          />
        </div>
      </div>
    </section>
  );
}
