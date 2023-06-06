import { EjectionClassName } from "./helpers";
import { SystemBreakpoints } from "../../theme/theme";

export const wrapProps = {
  alignItems: "center",
  as: "article" as "article",
  backgroundColor: "rgba(0,0,0,0.75)",
  bottom: 0,
  className: EjectionClassName.OVERLAY,
  display: "flex",
  justifyContent: "center",
  left: 0,
  position: "fixed" as "fixed",
  right: 0,
  top: 0,
  userSelect: "none" as "none",
  zIndex: 999999,
};

const dialogTransitionTime = `0.2s`;
export const dialogProps = {
  transition: `min-height ${dialogTransitionTime}, max-height ${dialogTransitionTime}, border-radius ${dialogTransitionTime}`,
  backgroundColor: "white",
  display: "flex",
  flexDir: "column" as "column",
  gap: 3,
  rounded: {
    base: 0,
    modalDesktop: 5,
  },
  minH: {
    base: "100%",
    modalDesktop: 0,
  },
  maxH: {
    base: "100%",
    modalDesktop: "72%",
    xl: "84%",
  },
  maxWidth: `${SystemBreakpoints.modalDesktop}px`,
  p: 3,
  position: "relative" as "relative",
  userSelect: "text" as "text",
  width: "100%",
};
export const titleProps = {
  as: "h2" as "h2",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
};

const closeButtonHW = 10;
export const closeButtonProps = {
  variant: "unstyled",
  children: "Close",
  // bg: "lightpink",
  bg: "transparent",
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
  flexDir: {
    base: "column" as "column",
    modalDesktop: "row" as "row",
  },
};

export const createActionButtonProps = (label: string, i: number) => ({
  key: `${label}-${i}`,
  colorScheme: "blue",
  children: label,
  "data-action-id": i,
  order: i + 1,
});
export const cancelButtonProps = {
  order: {
    base: 999999,
    modalDesktop: 0,
  },
};

export const createDialogSectionProps = (type: "static" | "dynamic") => ({
  flex: type === "static" ? "none" : 1,
  overflowY: "auto" as "auto",
});
