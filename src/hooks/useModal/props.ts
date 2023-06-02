import React from "react";

export const createWrapProps = (ref: React.RefObject<HTMLElement>) => ({
  alignItems: "center",
  as: "article" as "article",
  backgroundColor: "rgba(0,0,0,0.5)",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  left: 0,
  position: "fixed" as "fixed",
  ref,
  right: 0,
  top: 0,
  zIndex: 999999,
});
export const modalProps = {
  backgroundColor: "white",
  maxWidth: "600px",
  width: "100%",
};
