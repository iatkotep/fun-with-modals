export enum ModalClassName {
  CLOSE = "modal-close",
  CANCEL = "modal-cancel",
  OVERLAY = "modal-overlay",
  CONFIRM = "modal-confirm",
}

export const closingWhitelistNonBlocking = [
  ModalClassName.CONFIRM,
  ModalClassName.CLOSE,
  ModalClassName.CANCEL,
  ModalClassName.OVERLAY,
];
export const closingWhiteListBlocking = [ModalClassName.CONFIRM];
export const confirmationWhiteList = [ModalClassName.CONFIRM];
export const modalRoot = document.getElementById("modal-root") || document.body;
