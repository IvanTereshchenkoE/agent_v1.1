import { useState } from "react";

const useMouseHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export { useMouseHover };
