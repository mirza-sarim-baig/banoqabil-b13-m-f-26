import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0  bg-black/50 flex items-center justify-center z-50">
      {children}
    </div>
  );
};

export default Modal;
