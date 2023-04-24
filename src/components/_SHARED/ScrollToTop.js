


import React, { useState, useEffect } from "react";

import '../../styles/_SHARED/STT.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = currentScrollPos > 300;
    setIsVisible(isVisible);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="stt-button">
      {isVisible &&
        <button onClick={handleClick}>
          ⭡
        </button>
      }
    </div>
  );
}

export default ScrollToTopButton;