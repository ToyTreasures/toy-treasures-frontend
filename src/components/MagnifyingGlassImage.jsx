import React, { useState, useRef } from "react";

const MagnifyingGlassImage = ({
  src,
  alt,
  magnifierSize = 120,
  zoomLevel = 2.5,
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const elem = imageRef.current;
    const { top, left, width, height } = elem.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const magnifierHalfSize = magnifierSize / 2;
    const boundedX = Math.max(
      magnifierHalfSize,
      Math.min(x, width - magnifierHalfSize)
    );
    const boundedY = Math.max(
      magnifierHalfSize,
      Math.min(y, height - magnifierHalfSize)
    );

    setMagnifierPosition({ x: boundedX, y: boundedY });
  };

  return (
    <div className="relative inline-block w-full">
      <div className="relative rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:shadow-2xl">
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-2xl cursor-none transition-transform duration-300"
          onMouseEnter={() => setShowMagnifier(true)}
          onMouseLeave={() => setShowMagnifier(false)}
          onMouseMove={handleMouseMove}
        />

        {showMagnifier && (
          <div
            style={{
              position: "absolute",
              left: magnifierPosition.x - magnifierSize / 2,
              top: magnifierPosition.y - magnifierSize / 2,
              width: `${magnifierSize}px`,
              height: `${magnifierSize}px`,
              backgroundImage: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${imageRef.current?.width * zoomLevel}px ${
                imageRef.current?.height * zoomLevel
              }px`,
              backgroundPosition: `${
                -magnifierPosition.x * zoomLevel + magnifierSize / 2
              }px ${-magnifierPosition.y * zoomLevel + magnifierSize / 2}px`,
            }}
            className="
              rounded-full pointer-events-none cursor-none
              border-4 border-white/40
              shadow-[0_0_15px_rgba(0,0,0,0.3)]
              before:content-['']
              before:absolute before:inset-0
              before:border-2 before:border-gray-200/40
              before:rounded-full
              after:content-['']
              after:absolute after:inset-[-4px]
              after:border-2 after:border-gray-600/20
              after:rounded-full
            "
          />
        )}
      </div>
    </div>
  );
};

export default MagnifyingGlassImage;
