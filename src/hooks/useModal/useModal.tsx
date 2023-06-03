import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useClosingLogic, useModalState } from "./hooks";
import { Box, Button, Link, Text } from "@chakra-ui/react";
import { ModalClassName } from "./helpers";
import { createWrapProps, dialogProps } from "./props";

interface IModal {
  title: string;
  body: string;
  isBlocking?: boolean;
}

type TUseModal = (isOpenInit?: boolean) => {
  Modal: React.FC<IModal>;
  openModal: () => void;
};

export const useModal: TUseModal = (isOpenInit = false) => {
  const { isModalOpen, openModal, closeModal } = useModalState(isOpenInit);
  return {
    Modal: ({ title, body, isBlocking = false }) => {
      const refModalWrap = useRef<HTMLElement>(null);
      useClosingLogic(refModalWrap, closeModal, isBlocking);
      if (!isModalOpen) return null;

      const isVisible = !isBlocking;

      return ReactDOM.createPortal(
        <Box
          {...createWrapProps(isModalOpen, refModalWrap)}
          className={ModalClassName.OVERLAY}
        >
          <Box {...dialogProps}>
            <Text>{title}</Text>
            <Text>{body}</Text>
            {isVisible && (
              <Button className={ModalClassName.CLOSE}>Close</Button>
            )}
            <Box>
              {isVisible && (
                <Button className={ModalClassName.CANCEL}>Cancel</Button>
              )}
              <Button
                className={ModalClassName.CONFIRM}
                onClick={() => {
                  console.log("Call To Arms!!!!!");
                }}
              >
                Call To Action
              </Button>
              <Link href={"#"} className={ModalClassName.CONFIRM}>
                This is a link
              </Link>
            </Box>
          </Box>
        </Box>,
        document.body
      );
    },
    openModal,
  };
};
export default useModal;
