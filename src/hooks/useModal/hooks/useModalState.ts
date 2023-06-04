import React, { useCallback } from "react";
import { TNullable } from "../../../global/types";

export type TActionId = TNullable<number>;
export type TOpenModal = () => void;
export type TCloseModal = () => void;
export type TSelectActionId = (id: TActionId) => void;

type TUseModalState = (isOpenInit: boolean) => {
  isModalOpen: boolean;
  selectedActionId: TActionId;
  openModal: TOpenModal;
  closeModal: TCloseModal;
  selectActionId: TSelectActionId;
};
export const useModalState: TUseModalState = (isOpenInit) => {
  const [isOpen, setIsOpen] = React.useState(isOpenInit);
  const [actionId, setActionId] = React.useState<TActionId>(null);

  const openModal: TOpenModal = useCallback(() => {
    setIsOpen(true);
    setActionId(null);
  }, []);
  const closeModal: TCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);
  const selectActionId = useCallback<TSelectActionId>((id) => {
    setActionId(id);
  }, []);

  return {
    isModalOpen: isOpen,
    selectedActionId: actionId,
    openModal,
    closeModal,
    selectActionId,
  };
};
