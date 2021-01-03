import React, { ReactElement, useState, useEffect } from "react";

interface Props {}

function CustomCursor({}: Props): ReactElement {
  const [coord, setCoordinates] = useState({ x: -1, y: -1 });

  window.onmousemove = (e: MouseEvent) => {
    setTimeout(() => {
      setCoordinates({ x: e.clientX, y: e.clientY });
    }, 100);
  };

  return (
    <div
      style={{
        position: "fixed",
        left: `${coord.x - 15}px`,
        top: `${coord.y - 15}px`,
        zIndex: 70,
      }}
    >
      <svg height="40" width="40">
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          strokeWidth="2"
          stroke="#97979F"
        />
      </svg>
    </div>
  );
}

export default CustomCursor;
