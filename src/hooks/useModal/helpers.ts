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
