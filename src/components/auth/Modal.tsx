import React, { ReactElement, ReactNode } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

interface Props {
  isAuthed: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({
  isAuthed,
  onClose,
  children,
}: Props): ReactElement {
  if (!isAuthed) return <></>;

  return createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("modal") as Element
  );
}