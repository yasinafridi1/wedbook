import React from "react";

const AppButton = ({ children, bg, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${bg ? bg : "bg-red-500"} rounded-full w-[200px] h-[40px]`}
    >
      {children}
    </button>
  );
};

export default AppButton;
