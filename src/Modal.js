import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // useRef reference to one element and after this job it is destroid
  const elRef = useRef(null);
  const div = document.createElement("div");
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    // on load create modal
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // if modal closed remove div from dom
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
