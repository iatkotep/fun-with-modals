import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Box, Button, Text } from "@chakra-ui/react";
import { boolToResponse, EjectionClassName, modalRoot } from "./helpers";
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
import { useEngagementLogic } from "./hooks/useEngagementLogic";
import { TActionId, TOpenModal, useModalState } from "./hooks/useModalState";
import ModalIcon, { TModalIconType } from "./ModalIcon";
import ModalBody from "./ModalBody/ModalBody";
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
      const refModalWrap = useRef<HTMLElement>(null);

      useEngagementLogic(refModalWrap, closeModal, selectActionId, isBlocking);
      if (!isModalOpen) return null;

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
              />
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
                  <Button {...createActionButtonProps(label, i)} />
                ))}

                {isCancelVisible && (
                  <Button
                    {...cancelButtonProps}
                    className={EjectionClassName.CANCEL}
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
