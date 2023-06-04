import React, { useEffect } from "react";
import { arrayIntersection, noop } from "../../../global/helpers";
import {
  closingWhiteListBlocking,
  closingWhitelistNonBlocking,
  confirmationWhiteList,
} from "../helpers";

type TUseModalLogic = (
  ref: React.RefObject<HTMLElement>,
  closeModal: () => void,
  confirmModal: () => void,
  isBlocking: boolean
) => void;

export const useModalLogic: TUseModalLogic = (
  ref,
  closeModal,
  confirmModal,
  isBlocking
) => {
  useEffect(() => {
    if (!ref.current) return noop;

    // Type of Modal determines which element whitelist to use
    const closingWhiteList = isBlocking
      ? closingWhiteListBlocking
      : closingWhitelistNonBlocking;

    const delegateClickEvent = (e: MouseEvent) => {
      // Obtain the classList of the clicked element
      const target = e.target as HTMLElement;
      const targetClassList = target.classList.value.split(" ");

      // Determine if clicked element should close Modal
      const shouldCloseModal =
        arrayIntersection(closingWhiteList, targetClassList).length > 0;

      // Determine if clicked element should confirm Modal
      const shouldConfirmModal =
        arrayIntersection(confirmationWhiteList, targetClassList).length > 0;

      // Close and/or confirm Modal (or not) based on the above
      if (shouldCloseModal) closeModal();
      // if (shouldConfirmModal) confirmModal();
    };

    const modalNode = ref.current;
    modalNode.addEventListener("click", delegateClickEvent);
    return () => {
      modalNode.removeEventListener("click", delegateClickEvent);
    };
  }, [isBlocking, closeModal, confirmModal]);
};
