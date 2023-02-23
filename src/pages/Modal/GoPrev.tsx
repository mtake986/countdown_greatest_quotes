import React from "react";
import { useModalContext } from "../../contexts/ModalContext";
import { IoIosArrowBack } from "react-icons/io";

const GoPrev = () => {
  const { handleCurrPageNum } = useModalContext();

  return (
    <div
      className="cursor-pointer flex items-center gap-2 p-1 hover:opacity-30"
      onClick={() => handleCurrPageNum("movePrev")}
    >
      <IoIosArrowBack />
      <span>Back</span>
    </div>
  );
};

export default GoPrev;
