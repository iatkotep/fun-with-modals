import React from "react";
import useModal from "../useModal";
import { Box, Button } from "@chakra-ui/react";
import { isNull } from "../../../global/helpers";

const BasicModal: React.FC<{
  title: string;
  body: string;
  isOpenInit?: boolean;
  buttonText?: string;
  isBlocking?: boolean;
}> = ({ title, body, isBlocking = false, buttonText, isOpenInit = false }) => {
  const { Modal, openModal, selectedActionId } = useModal(isOpenInit);
  return (
    <>
      <Button onClick={() => openModal()}>{buttonText}</Button>
      <Modal {...{ title, body, isBlocking }} />
      {!isNull(selectedActionId) && (
        <Box p={5}>You selected Button {selectedActionId}</Box>
      )}
    </>
  );
};

export default BasicModal;
