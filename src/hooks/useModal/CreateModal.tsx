import React, { useEffect } from "react";

type TUseCloseDelegation = (isBlocking: boolean, close: () => void) => void;
const useCloseDelegation: TUseCloseDelegation = (isBlocking, close) => {
  useEffect(() => {
    if (isBlocking) {
      const listener = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          close();
        }
      };
      window.addEventListener("keydown", listener);
      return () => {
        window.removeEventListener("keydown", listener);
      };
    }
  }, [isBlocking, close]);
};

interface IModal {
  title: string;
  content: string;
  isBlocking: boolean;
}
type TCreateModal = (isOpen: boolean, fnClose: () => void) => React.FC<IModal>;

const CreateModal: TCreateModal =
  (isOpen, fnClose) =>
  ({ title, content, isBlocking }) => {
    useCloseDelegation(isBlocking, fnClose);
    return <div></div>;
  };

export default CreateModal;
