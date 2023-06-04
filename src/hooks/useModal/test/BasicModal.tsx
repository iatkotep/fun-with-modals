import React from "react";
import useModal from "../useModal";
import { Box, Button } from "@chakra-ui/react";

const BasicModal: React.FC<{
  title: string;
  body: string;
  isOpenInit?: boolean;
  buttonText?: string;
  isBlocking?: boolean;
}> = ({ title, body, isBlocking = false, buttonText, isOpenInit = false }) => {
  const { Modal, openModal, isModalConfirmed } = useModal(isOpenInit);
  return (
    <>
      <Button onClick={() => openModal()}>{buttonText}</Button>
      <Modal {...{ title, body, isBlocking }} />
      {isModalConfirmed && <Box p={5}>Confirmed</Box>}
    </>
  );
};

export default BasicModal;
