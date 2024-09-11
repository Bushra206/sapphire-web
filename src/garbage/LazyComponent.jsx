import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";

export default function LazyComponent() {
  useEffect(() => {
    window.addEventListener("load", () => {
      AOS.init({
        duration: 700,
      });
    });
  }, []);
  return (
    <div
      data-aos="fade-left" //Here you can use any of the AOS animations
      data-aos-offset="200"
    >
      MyFunctionalComponent
    </div>
  );
}
