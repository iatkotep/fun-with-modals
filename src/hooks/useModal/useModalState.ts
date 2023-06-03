import React, { useCallback } from "react";

type TUseModalState = (isOpenInit: boolean) => {
  isModalOpen: boolean;
  isModalConfirmed: boolean;
  openModal: () => void;
  closeModal: () => void;
  confirmModal: () => void;
};
export const useModalState: TUseModalState = (isOpenInit) => {
  const [isOpen, setIsOpen] = React.useState(isOpenInit);
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
    setIsConfirmed(false);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);
  const confirmModal = useCallback(() => {
    setIsConfirmed(true);
  }, []);

  return {
    isModalOpen: isOpen,
    isModalConfirmed: isConfirmed,
    openModal,
    closeModal,
    confirmModal,
  };
};
