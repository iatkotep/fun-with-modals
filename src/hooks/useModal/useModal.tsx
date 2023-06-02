import ReactDOM from "react-dom";
import React, { useCallback, useEffect, useRef } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { noop } from "../../global/helpers";
import { createWrapProps, modalProps } from "./props";

interface IModal {
  title: string;
  body: string;
  isBlocking?: boolean;
}

type TUseModal = (isOpenInit?: boolean) => {
  Modal: React.FC<IModal>;
  open: () => void;
};

export const useModal: TUseModal = (isOpenInit = false) => {
  const [isOpen, setIsOpen] = React.useState(isOpenInit);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    Modal: ({ title, body, isBlocking = false }) => {
      const refModalWrap = useRef<HTMLElement>(null);

      useEffect(() => {
        if (!refModalWrap.current) return noop;
        const modalNode = refModalWrap.current;
        const delegateCloseEvent = (e: MouseEvent) => {
          console.log(e);
        };

        modalNode.addEventListener("click", delegateCloseEvent);
        return () => {
          modalNode.removeEventListener("click", delegateCloseEvent);
        };
      }, [isBlocking, closeModal]);

      if (!isOpen) return null;

      return ReactDOM.createPortal(
        <Box {...createWrapProps(refModalWrap)}>
          <Box {...modalProps}>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Button className={"close"}>Close</Button>
          </Box>
        </Box>,
        document.body
      );
    },
    open: openModal,
  };
};
export default useModal;
