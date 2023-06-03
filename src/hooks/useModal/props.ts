import React from "react";
import { ModalClassName } from "./helpers";

export const createWrapProps = (
  isOpen: boolean,
  ref: React.RefObject<HTMLElement>
) => ({
  // transition: "opacity 1s",
  // pointerEvents: isOpen ? ("auto" as "auto") : ("none" as "none"),
  // opacity: isOpen ? 1 : 0,

  alignItems: "center",
  as: "article" as "article",
  backgroundColor: "rgba(0,0,0,0.75)",
  bottom: 0,
  className: ModalClassName.OVERLAY,
  display: "flex",
  justifyContent: "center",
  left: 0,
  position: "fixed" as "fixed",
  ref,
  right: 0,
  top: 0,
  zIndex: 999999,
});
export const dialogProps = {
  backgroundColor: "white",
  maxWidth: "600px",
  width: "100%",
};
