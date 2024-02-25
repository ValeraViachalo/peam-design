import React from "react";
import "./Home.scss";
import { useIsPresent } from "framer-motion";
import Slider from "./Slider/Slider";

export default function Home() {
  const isPresent = useIsPresent();

  return (
    <>
      <main className="home">
        <div className="hero">
          <img
            src="/public/images/hero.webp"
            alt="hero"
            className="hero__image"
          />

          <div className="text">
            <p className="secondary">Interview</p>
            <h1>
              <span className="secondary">
              In conversation with 
                designer and founder
                </span>
              <br />
              <span className="">

              Andrea Harbeck
              </span>
            </h1>
          </div>
        </div>
        <div className="interview">
          <div className="interview__question-1 interview__question">
            <h2>
              In your own words, who or what is .PEAM?
            </h2>
            <p>
              <span className="author secondary">
                A.H.
              </span>
              .PEAM stands for interior consulting, interior concepts and a&nbsp;distinct living experience. And, for our own interior line; my collection includes steel and wooden furniture as well as home accessories made by&nbsp;craftsmen and artists of the Bavaria and South Tyrol regions. I&nbsp;distribute&nbsp;them through my shop soon, along with other products from select manufacturers such as Bauhaus ceramics by&nbsp;Hedwig Bollhagen or design classics by&nbsp;Niels Otto Møller.
            </p>
            <img src="/public/images/interview-1.webp" alt="interview-1" className="interview__image"/>
          </div>

          <div className="interview__question-2 interview__question">
            <h2>
              That means .PEAM also stands for a&nbsp;very specific style?
            </h2>
            <p>
              <span className="author secondary">
                A.H.
              </span>
              Yes, absolutely — but for a&nbsp;style that is rather felt than explained. The core philosophy that shapes all our commissioned work and pieces is a&nbsp;concept of calmness. With the colors and materials we&nbsp;use, we&nbsp;create a&nbsp;contrast to&nbsp;our hectic and digital environment. Thus, .PEAM stands for sustainable, natural design, and an interior that creates a&nbsp;platform for people to&nbsp;flourish. Good design should step back and not push itself into the foreground. And because it should still preserve value years later, I&nbsp;work with materials that age well: Wood, leather, steel, and many old and new classics that aren’t as well known yet, but often have a&nbsp;great story.
            </p>
            <img src="/public/images/interview-2.webp" alt="interview-1" className="interview__image"/>
          </div>
        </div>

        <Slider />
      </main>

    </>
  );
}
