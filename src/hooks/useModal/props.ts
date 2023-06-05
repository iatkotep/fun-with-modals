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

export const dialogProps = {
  backgroundColor: "white",
  height: {
    base: "100%",
    md: "auto",
  },
  p: 3,
  position: "relative" as "relative",
  display: "flex",
  flexDir: "column" as "column",
  gap: 3,
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
  userSelect: "text" as "text",
  width: "100%",
};
export const titleProps = {
  as: "h2" as "h2",
  fontWeight: "bold",
};

const closeButtonHW = 10;
export const closeButtonProps = {
  variant: "unstyled",
  children: "Close",
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
  flexDir: {
    base: "column" as "column",
    md: "row" as "row",
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
  children: "Cancel",
  order: {
    base: 999999,
    md: 0,
  },
};

export const createDialogSectionProps = (type: "static" | "dynamic") => ({
  flex: type === "static" ? "none" : 1,
  overflowY: "auto" as "auto",
});
