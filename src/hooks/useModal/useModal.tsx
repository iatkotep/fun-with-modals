import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Box, Button, Link, Text } from "@chakra-ui/react";
import { ModalClassName, modalRoot } from "./helpers";
import {
  wrapProps,
  dialogProps,
  titleProps,
  closeButtonProps,
  actionsProps,
} from "./props";
import { useModalLogic } from "./hooks/useModalLogic";
import { useModalState } from "./hooks/useModalState";

type TModalAction = { label: string; callback: () => void };
interface IModal {
  title: string;
  body: string;
  actions?: TModalAction[];
  isBlocking?: boolean;
}

type TUseModal = (isOpenInit?: boolean) => {
  Modal: React.FC<IModal>;
  openModal: () => void;
  isModalConfirmed: boolean;
};

export const useModal: TUseModal = (isOpenInit = false) => {
  const { isModalOpen, isModalConfirmed, openModal, closeModal, confirmModal } =
    useModalState(isOpenInit);

  return {
    Modal: ({ title, body, isBlocking = false, actions }) => {
      actions = [
        {
          label: "Do it!",
          callback: () => {
            console.log("Do it!");
          },
        },
        {
          label: "Do it again!",
          callback: () => {
            console.log("Do it again!");
          },
        },
      ];

      const refModalWrap = useRef<HTMLElement>(null);
      useModalLogic(refModalWrap, closeModal, confirmModal, isBlocking);
      if (!isModalOpen) return null;

      return ReactDOM.createPortal(
        <Box
          {...wrapProps}
          ref={refModalWrap}
          className={ModalClassName.OVERLAY}
        >
          <Box {...dialogProps}>
            <Text {...titleProps}>{title}</Text>
            <Text>{body}</Text>
            {!isBlocking && (
              <Button {...closeButtonProps} className={ModalClassName.CLOSE}>
                Close
              </Button>
            )}
            <Box {...actionsProps}>
              {actions?.map(({ label, callback }, i) => (
                <Button
                  key={`${label}-${i}`}
                  className={ModalClassName.CONFIRM}
                  onClick={() => {
                    console.log("this works!!");
                  }}
                >
                  {label}
                </Button>
              ))}

              {!isBlocking && (
                <Button
                  className={ModalClassName.CANCEL}
                  onClick={() => {
                    console.log("cancel!");
                  }}
                >
                  Cancel
                </Button>
              )}
            </Box>
          </Box>
        </Box>,
        modalRoot
      );
    },
    openModal,
    isModalConfirmed,
  };
};
export default useModal;
