import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Box, Button, Link, Text } from "@chakra-ui/react";
import { EjectionClassName, modalRoot } from "./helpers";
import {
  wrapProps,
  dialogProps,
  titleProps,
  closeButtonProps,
  actionsProps,
  createActionButtonProps,
  cancelButtonProps,
} from "./props";
import { useEngagementLogic } from "./hooks/useEngagementLogic";
import { TActionId, TOpenModal, useModalState } from "./hooks/useModalState";

type TModalAction = { label: string; callback: () => void };
interface IModal {
  title: string;
  body: string;
  actions?: string[];
  isBlocking?: boolean;
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
    Modal: ({ title, body, isBlocking = false, actions }) => {
      actions = ["Take the Red Pill", "Take the Blue Pill"];

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
            <Text {...titleProps}>{title}</Text>
            <Text>{body}</Text>
            {!isBlocking && (
              <Button
                {...closeButtonProps}
                className={EjectionClassName.CLOSE}
              />
            )}
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
        </Box>,
        modalRoot
      );
    },
    openModal,
    selectedActionId,
  };
};
export default useModal;
