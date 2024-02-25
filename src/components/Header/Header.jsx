import React, { useRef } from "react";
import { Logo } from "../Logo/Logo";

import "./Header.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Header = () => {
  const headerRef = useRef();
  const logoRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(logoRef.current, {
      scale: .7,
      yPercent: -40,
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
  })

  return (
    <header className="header" ref={headerRef}>
      <div ref={logoRef} className="header__logo">
        <Logo className="header__logo" />
      </div>
    </header>
  );
};
