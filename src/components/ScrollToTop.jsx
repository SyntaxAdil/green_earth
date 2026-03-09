import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showSTT, setShowSTT] = useState(false);

  useEffect(() => {
    const hadleScroll = () => {
      if (window.scrollY > 200) {
        
        setShowSTT(true);
      } else {
        setShowSTT(false);
      }
    };
    window.addEventListener("scroll", hadleScroll);
    return () => window.removeEventListener("scroll", hadleScroll);
  }, []);

  const backToTop=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
  }

  return (
    <>
      {showSTT && (
        <button className="btn btn-success rounded-full fixed bottom-6 right-4 h-10 w-10 p-0 text-white" onClick={backToTop}>
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
