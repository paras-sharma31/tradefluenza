'use client'
import React, { useState, useRef, MouseEvent, Children, ReactNode } from "react";
import { motion } from "framer-motion";

interface MousePosition {
  x?: number;
  y?: number;
  centerX?: number;
  centerY?: number;
  width?: number;
  height?: number;
}

export default function Cursor({ children }: { children?: React.ReactNode }) {
  return (
    <div className="App w-full h-full flex justify-center items-center flex-col">
        <Box>
         {children}
        </Box>
    </div>
  );
}

const css = {
  box: {
    width: "100vw",
    height: "auto",
    position: "relative" as const,
  },
  fly: {
    position: "absolute" as const,
    width: "20px",
    height: "20px",
    margin: "-10px",
    backgroundColor: "red",
    borderRadius: 10,
  },
};

function getRelativeCoordinates(
  event: MouseEvent<HTMLDivElement>,
  referenceElement: HTMLDivElement | null
): MousePosition {
  if (!referenceElement) return {};

  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference: HTMLElement | null = referenceElement.offsetParent as HTMLElement | null;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent as HTMLElement | null;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

interface BoxProps {
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({});
  const boxRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  return (
    <motion.div
      ref={boxRef}
      style={{ ...css.box, perspective: 600 }}
      onMouseMove={handleMouseMove}
      animate={{
        rotateX: (mousePosition.centerX || 0) * 20,
        rotateY: (mousePosition.centerY || 0) * 20,
      }}
    >
      <motion.div
        style={css.fly}
        animate={{
          x: mousePosition.x || 0,
          y: mousePosition.y || 0,
        }}
      />
      <motion.div
        style={{ ...css.fly, backgroundColor: "gold" }}
        animate={{
          x: mousePosition.x || 0,
          y: mousePosition.y || 0,
        }}
        transition={{ type: "spring" }}
      />
      <motion.div
        style={{ ...css.fly, backgroundColor: "orange" }}
        animate={{
          x: mousePosition.x || 0,
          y: mousePosition.y || 0,
        }}
        transition={{ type: "tween" }}
      />
      {children}
    </motion.div>
  );
};
