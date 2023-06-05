import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Box, Button, Text } from "@chakra-ui/react";
import { EjectionClassName, modalRoot } from "./helpers";
import {
  wrapProps,
  dialogProps,
  titleProps,
  closeButtonProps,
  actionsProps,
  createActionButtonProps,
  cancelButtonProps,
  createDialogSectionProps,
} from "./props";
import { useEngagementLogic } from "./hooks/useEngagementLogic";
import { TActionId, TOpenModal, useModalState } from "./hooks/useModalState";
import ModalIcon from "./ModalIcon";
import ModalBody from "./ModalBody/ModalBody";

export type TModalIconType = "info" | "warning" | "error";

export interface IModal {
  title: string;
  body: React.ReactNode;
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
    Modal: ({ title, body, isBlocking = false, actions, iconType }) => {
      const refModalWrap = useRef<HTMLElement>(null);

      useEngagementLogic(refModalWrap, closeModal, selectActionId, isBlocking);
      if (!isModalOpen) return null;

      return ReactDOM.createPortal(
        <Box
          {...wrapProps}
          ref={refModalWrap}
          className={EjectionClassName.OVERLAY}
        >
          <Box {...dialogProps}>
            {!isBlocking && (
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
              <ModalBody>{body}</ModalBody>
            </Box>
            <Box {...createDialogSectionProps("static")}>
              <Box {...actionsProps}>
                {actions?.map((label, i) => (
                  <Button {...createActionButtonProps(label, i)} />
                ))}

                {!isBlocking && (
                  <Button
                    {...cancelButtonProps}
                    className={EjectionClassName.CANCEL}
                  />
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
