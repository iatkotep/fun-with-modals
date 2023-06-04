import { ModalClassName } from "./helpers";
import { SystemBreakpoints } from "../../theme/theme";

export const wrapProps = {
  alignItems: "center",
  as: "article" as "article",
  backgroundColor: "rgba(0,0,0,0.75)",
  bottom: 0,
  className: ModalClassName.OVERLAY,
  display: "flex",
  justifyContent: "center",
  left: 0,
  position: "fixed" as "fixed",
  right: 0,
  top: 0,
  zIndex: 999999,
};

export const dialogProps = {
  backgroundColor: "white",
  height: {
    base: "100%",
    md: "auto",
  },
  p: 3,
  position: "relative" as "relative",
  rounded: {
    base: 0,
    md: 5,
  },
  maxH: {
    base: "100%",
    md: "72%",
    xl: "84%",
  },
  maxWidth: `${SystemBreakpoints.md}px`,
  width: "100%",
};
export const titleProps = {
  as: "h2" as "h2",
  fontWeight: "bold",
};

const closeButtonHW = 10;
export const closeButtonProps = {
  variant: "unstyled",
  bg: "lightpink",
  position: "absolute" as "absolute",
  overflow: "hidden",
  textIndent: "-9999px",
  h: closeButtonHW,
  w: closeButtonHW,
  top: 0,
  right: 0,
  sx: {
    "::before": {
      alignItems: "center",
      textIndent: 0,
      fontSize: 32,
      bottom: 0,
      content: '"\\00D7"',
      display: "flex",
      justifyContent: "center",
      left: 0,
      position: "absolute",
      right: 0,
      top: 0,
      transform: "translateY(-1%)",
    },
  },
};

export const actionsProps = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 3,
};
