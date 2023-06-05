import React from "react";
import useModal, { IModal } from "../useModal";
import { Box, Button, Flex } from "@chakra-ui/react";
import { isNull } from "../../../global/helpers";

interface IModalStory extends IModal {
  isOpenInit?: boolean;
}

const flexCellProps = {
  flex: 1,
  gap: 10,
};

const ModalStory: React.FC<IModalStory> = ({
  title,
  body,
  actions,
  isOpenInit = false,
}) => {
  const {
    Modal: DismissibleModal,
    openModal: openDismissableModal,
    selectedActionId: selectedActionId_dismissible,
  } = useModal(isOpenInit);

  const {
    Modal: BlockingModal,
    openModal: openBlockingModal,
    selectedActionId: selectedActionId_blocking,
  } = useModal(isOpenInit);
  return (
    <Flex w={"100%"}>
      <Box {...flexCellProps}>
        <Box mb={5}>
          <Button onClick={() => openDismissableModal()}>
            Launch Dismissible Version
          </Button>
          <DismissibleModal {...{ title, body, actions }} />
        </Box>
        {!isNull(selectedActionId_dismissible) && (
          <Box>You selected "{actions[selectedActionId_dismissible!]}"</Box>
        )}
      </Box>
      <Box {...flexCellProps}>
        <Box mb={5}>
          <Button onClick={() => openBlockingModal()}>
            Launch Blocking Version
          </Button>
          <BlockingModal {...{ title, body, actions, isBlocking: true }} />
        </Box>
        {!isNull(selectedActionId_blocking) && (
          <Box>You selected "{actions[selectedActionId_blocking!]}"</Box>
        )}
      </Box>
    </Flex>
  );
};

export default ModalStory;
