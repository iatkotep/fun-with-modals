import React, { useCallback, useEffect } from "react";
import { arrayIntersection, noop } from "../../global/helpers";
import { ModalClassName } from "./helpers";

type TUseModalState = (isOpenInit: boolean) => {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const closingWhiteListBlocking = [ModalClassName.CONFIRM];
const closingWhitelistNonBlocking = [
  ModalClassName.CONFIRM,
  ModalClassName.CLOSE,
  ModalClassName.CANCEL,
  ModalClassName.OVERLAY,
];

export const useModalState: TUseModalState = (isOpenInit) => {
  const [isOpen, setIsOpen] = React.useState(isOpenInit);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isModalOpen: isOpen, openModal, closeModal };
};

type TUseClosingLogic = (
  ref: React.RefObject<HTMLElement>,
  closeModal: () => void,
  isBlocking: boolean
) => void;
export const useClosingLogic: TUseClosingLogic = (
  ref,
  closeModal,
  isBlocking
) => {
  useEffect(() => {
    if (!ref.current) return noop;

    const closingWhiteList = isBlocking
      ? closingWhiteListBlocking
      : closingWhitelistNonBlocking;
    const delegateCloseEvent = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const targetClassList = target.classList.value.split(" ");
      const canCloseModal =
        arrayIntersection(closingWhiteList, targetClassList).length > 0;

      if (canCloseModal) closeModal();
      // if (canCloseModal) console.log("Close the Modal!!!!");
    };

    const modalNode = ref.current;
    modalNode.addEventListener("click", delegateCloseEvent);
    return () => {
      modalNode.removeEventListener("click", delegateCloseEvent);
    };
  }, [isBlocking, closeModal]);
};
