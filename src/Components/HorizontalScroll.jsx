import React, { useRef } from "react";
import "../styles/components/HorizontalScroll.scss"; // Import your styles

const HorizontalScroll = ({ children }) => {
   const scrollRef = useRef(null);

   const handleScroll = (direction) => {
      if (scrollRef.current) {
         const scrollAmount = 500; // Adjust scrolling distance
         scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
         });
      }
   };

   return (
      <div className="scroll-container">
         <button className="scroll-btn left" onClick={() => handleScroll("left")}>
            &#10094;
         </button>
         <div className="scroll-content" ref={scrollRef}>
            {children}
         </div>
         <button className="scroll-btn right" onClick={() => handleScroll("right")}>
            &#10095;
         </button>
      </div>
   );
};

export default HorizontalScroll;
