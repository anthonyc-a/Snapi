import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Welcome.css";

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
  const elementRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.location.href = "#Two"; // set the URL to navigate to
  };

  useEffect(() => {
    const element = elementRef.current;

    // Only proceed if the element is present on the page
    if (element) {
      // Create a ScrollTrigger instance for the element
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: "top 80%", // Set the start point of the animation
        onEnter: () => {
          setIsVisible(true);
          gsap.fromTo(
            element,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: .5 }
          );
        },
        onLeaveBack: () => {
          setIsVisible(false);
          gsap.set(element, { opacity: 0, y: 20 });
        },
        scrub: true,
      });

      // Clean up the ScrollTrigger instance when the component is unmounted
      return () => {
        trigger.kill();
      };
    }
  }, []);

  return (
    <div className="welcome" ref={elementRef}>
      {isVisible && (
        <>
          <h1>
            Audience <span>activation</span> and <span>engagement</span> for the
            experience economy
          </h1>
          <button onClick={handleClick}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.75 0L6.75 9.11242L10.9501 4.91235L12 6L6 12L0 6L1.04996 4.95011L5.25 9.11242L5.25 0L6.75 0Z"
                fill="#344774"
              />
            </svg>
            Learn more
          </button>
        </>
      )}
    </div>
  );
};

export default Welcome;
