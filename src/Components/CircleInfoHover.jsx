import { useRef, useEffect, useState } from "react";

export default function CircleInfoHover({ texts = [], mainIndex = 0, className = "", zIndex = 1, bg = "#eee" }) {
  const circleRef = useRef(null);
  const [radius, setRadius] = useState(0);
  useEffect(() => {
    function updateRadius() {
      if (circleRef.current) {
        setRadius(circleRef.current.offsetWidth / 2);
      }
    }
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div
      ref={circleRef}
      className={`absolute rounded-full border-2 border-solid border-transparent hover:border-[#777] transition-all duration-300 ease-in-out show-ring-texts flex justify-center items-center ${className}`}
      style={{
        "--total": texts.length-1,
        "--radius": `${radius}px`,
        background: bg,
        zIndex: zIndex,
      }}
    >
      {texts.map((txt, i) => (
        <p
          key={i}
          className={i === mainIndex ? "main-ring-text" : "ring-text"}
          style={{ "--index": i }}
        >
          {txt}
        </p>
      ))}
    </div>
  );
}
