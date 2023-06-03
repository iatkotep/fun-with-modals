import React from "react";
import { ModalClassName } from "./helpers";
import { SystemBreakpoints } from "../../theme/theme";

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
  maxWidth: `${SystemBreakpoints.md}px`,
  width: "100%",
  height: {
    base: "100%",
    md: "auto",
  },
  maxH: {
    base: "100%",
    md: "72%",
    xl: "84%",
  },
};
