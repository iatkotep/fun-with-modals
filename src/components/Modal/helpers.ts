import { arrayIntersection } from "../../global/helpers";

export enum EjectionClassName {
  CLOSE = "modal-close",
  CANCEL = "modal-cancel",
  OVERLAY = "modal-overlay",
}

export const allowList_EjectionClassNames_NonBlocking = [
  EjectionClassName.CLOSE,
  EjectionClassName.CANCEL,
  EjectionClassName.OVERLAY,
];
export const allowList_EjectionClassNames_Blocking = [];
export const modalRoot = document.getElementById("modal-root") || document.body;
export const boolToResponse = (bool?: boolean) => {
  if (bool === undefined) return "Meh";
  return bool ? "Yes" : "No";
};
export const getTabIndex = (idx: number, base: number = 0) => base + idx * 10;
export const getHardwareTabIndex = (idx: number) => getTabIndex(idx, 100);
export const shouldEject = (targetClassNames: string[], allowList: string[]) =>
  arrayIntersection(allowList, targetClassNames).length > 0;
