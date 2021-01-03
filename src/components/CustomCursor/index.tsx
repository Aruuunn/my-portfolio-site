import React, { ReactElement, useState, useEffect } from "react";

interface Props {
  disabled?: boolean;
}

function CustomCursor({ disabled }: Props): ReactElement {
  const initialState = { x: -1000, y: -1000 };
  const [coord, setCoordinates] = useState(initialState);

  if (typeof window !== "undefined")
    window.onmousemove = (e: MouseEvent) => {
      setTimeout(() => {
        if (!disabled) setCoordinates({ x: e.clientX, y: e.clientY });
      }, 100);
    };

  if (disabled) {
    return <div />;
  }

  return (
    <div
      style={{
        position: "fixed",
        left: `${coord.x - 15}px`,
        top: `${coord.y - 15}px`,
        zIndex: -1,
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
