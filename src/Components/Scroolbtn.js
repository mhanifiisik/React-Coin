import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Scrollbtn() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="z-30 fixed right-0 bottom-0">
      {isVisible && (
        <div onClick={scrollToTop} className="Toup">
          <FaArrowCircleUp size={60} color={"yellow"} />
        </div>
      )}
    </div>
  );
}
