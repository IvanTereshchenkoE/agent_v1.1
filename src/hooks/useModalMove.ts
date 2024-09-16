import { useRef, useState, useEffect } from "react";

const useModalMove = () => {
  
  const wrapperRef = useRef(null);
  
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  
  const handleTapOutside = (event: MouseEvent | TouchEvent) => {
    if (
      wrapperRef.current &&
      !(wrapperRef.current as HTMLElement).contains(event.target as Node)
    ) {
      handleClosePanel();
    }
  };

  const handleOpenModal = () => {
    setModalOpen((prev) => !prev);
  };

  const handleClosePanel = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleTapOutside);
    document.addEventListener("touchstart", handleTapOutside);
    return () => {
      document.removeEventListener("mousedown", handleTapOutside);
      document.removeEventListener("touchstart", handleTapOutside);
    };
  }, []);

  return {
    handleOpenModal,
    modalOpen,
    wrapperRef,
    setModalOpen,
  };
};

export { useModalMove };
