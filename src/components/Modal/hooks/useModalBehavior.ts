import React, { useEffect } from "react";
import { isNull, noop } from "../../../global/helpers";
import {
  allowList_EjectionClassNames_Blocking,
  allowList_EjectionClassNames_NonBlocking,
  shouldEject,
} from "../helpers";
import { TActionId, TCloseModal, TSelectActionId } from "./useModalState";

type TUseModalLogic = (
  ref: React.RefObject<HTMLElement>,
  closeModal: TCloseModal,
  selectActionId: TSelectActionId,
  isBlocking: boolean
) => void;

export const useModalBehavior: TUseModalLogic = (
  ref,
  closeModal,
  selectActionId,
  isBlocking
) => {
  useEffect(() => {
    if (!ref.current) return noop;

    // Type of Modal determines which element allowList to use
    const allowList_EjectionClassNames = isBlocking
      ? allowList_EjectionClassNames_Blocking
      : allowList_EjectionClassNames_NonBlocking;

    const delegateEngagementEvent = (e: MouseEvent) => {
      // Obtain array of classNames of the clicked element
      const target = e.target as HTMLElement;
      const targetClassNames = target.classList.value.split(" ");

      // Set `actionId` (or Null) based on clicked element.  Only Actions have `actionId`
      const actionIdRaw = parseInt(target.dataset.actionId || "", 10);
      const actionId: TActionId = isNaN(actionIdRaw) ? null : actionIdRaw;

      // Close Modal if user has clicked an Ejection element, or if user has clicked an Action element
      const shouldCloseModal =
        shouldEject(targetClassNames, allowList_EjectionClassNames) ||
        !isNull(actionId);

      // Select `actionId` if applicable.  Close Modal if applicable.
      selectActionId(actionId);
      if (shouldCloseModal) closeModal();
    };

    const modalNode = ref.current;
    modalNode.addEventListener("click", delegateEngagementEvent);
    return () => {
      modalNode.removeEventListener("click", delegateEngagementEvent);
    };
  }, [isBlocking, closeModal, selectActionId]);
};
