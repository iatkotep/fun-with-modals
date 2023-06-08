import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Box, Button, Text } from "@chakra-ui/react";
import {
  boolToResponse,
  EjectionClassName,
  getHardwareTabIndex,
  getTabIndex,
  modalRoot,
} from "./helpers";
import {
  actionsProps,
  cancelButtonProps,
  closeButtonProps,
  createActionButtonProps,
  createDialogSectionProps,
  dialogProps,
  titleProps,
  wrapProps,
} from "./props";
import { useModalBehavior } from "./hooks/useModalBehavior";
import { TActionId, TOpenModal, useModalState } from "./hooks/useModalState";
import { CloseIcon } from "@chakra-ui/icons";
import ModalIcon, { TModalIconType } from "./_/ModalIcon";
import ModalBody from "./_/ModalBody/ModalBody";
import { allTrue } from "../../global/helpers";

export interface IModal {
  title: string;
  children: React.ReactNode;
  cancelText?: string;
  actions: string[];
  isBlocking?: boolean;
  iconType?: TModalIconType;
}

type TUseModal = (isOpenInit?: boolean) => {
  Modal: React.FC<IModal>;
  openModal: TOpenModal;
  selectedActionId: TActionId;
};

/**
 *  @class useModalReturn
 *  @type {Object}
 *  @property {React.FC} Modal The Modal Component.
 *  @property {function} openModal The the function that opens the Modal.
 *  @property {number | null} selectedActionId The Modal selection state
 */

/**
 * @function useModal
 * @param isOpenInit
 * @description Generates and provides a Modal Component, a function to open the Modal, and a value to track Modal interaction state.
 * @returns useModalReturn
 */
export const useModal: TUseModal = (isOpenInit = false) => {
  const {
    isModalOpen,
    selectedActionId,
    openModal,
    closeModal,
    selectActionId,
  } = useModalState(isOpenInit);

  return {
    Modal: ({
      title,
      children,
      isBlocking = false,
      cancelText,
      actions,
      iconType,
    }) => {
      const refModalWrap = useRef<HTMLDivElement>(null);

      // Closing and Confirming Logic
      useModalBehavior(refModalWrap, closeModal, selectActionId, isBlocking);

      // Handle Closed State
      if (!isModalOpen) return null;

      const actionsTabIndexBase = 1000;
      const topRowIndexBase = 2000;

      // Conditionally visible elements
      const isCloseVisible = !isBlocking;
      const isCancelVisible = allTrue(!isBlocking, !!cancelText);

      return ReactDOM.createPortal(
        <Box
          {...wrapProps}
          ref={refModalWrap}
          className={EjectionClassName.OVERLAY}
        >
          <Box {...dialogProps}>
            {isCloseVisible && (
              <Button
                {...closeButtonProps}
                className={EjectionClassName.CLOSE}
                tabIndex={topRowIndexBase}
              >
                <CloseIcon />
              </Button>
            )}
            <Box {...createDialogSectionProps("static")}>
              <Text {...titleProps}>
                {iconType && <ModalIcon type={iconType} />}
                {title}
              </Text>
            </Box>
            <Box {...createDialogSectionProps("dynamic")}>
              <ModalBody>{children}</ModalBody>
            </Box>
            <Box {...createDialogSectionProps("static")}>
              <Box {...actionsProps}>
                {actions?.map((label, i) => (
                  <Button
                    {...createActionButtonProps(label, i)}
                    tabIndex={getTabIndex(i, actionsTabIndexBase)}
                  />
                ))}

                {isCancelVisible && (
                  <Button
                    {...cancelButtonProps}
                    className={EjectionClassName.CANCEL}
                    tabIndex={getTabIndex(actions.length, actionsTabIndexBase)}
                  >
                    {cancelText}
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Box>,
        modalRoot
      );
    },
    openModal,
    selectedActionId,
  };
};
export default useModal;
