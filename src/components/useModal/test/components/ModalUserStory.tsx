import React from "react";
import useModal, { IModal } from "../../useModal";
import { Box, Button, Flex } from "@chakra-ui/react";
import { isNull } from "../../../../global/helpers";
import { StoryHeading } from "./StoryHeading";

export interface IModalUserStory {
  userStory: React.ReactNode;
  modalProps: IModal;
  isOpenInit?: boolean;
  storyButtonText?: string;
}

const flexCellProps = {
  flex: 1,
  gap: 10,
};

export const ModalUserStory: React.FC<IModalUserStory> = ({
  userStory,
  modalProps,
  isOpenInit = false,
  storyButtonText = "Launch Modal",
}) => {
  const { Modal, openModal, selectedActionId } = useModal(isOpenInit);

  return (
    <>
      <StoryHeading
        {...{ storyTitle: "User Story", storyDescription: userStory }}
      />
      <Flex w={"100%"}>
        <Box {...flexCellProps}>
          <Box mb={5}>
            <Button onClick={() => openModal()}>{storyButtonText}</Button>
            <Modal {...modalProps} />
          </Box>
          {!isNull(selectedActionId) && (
            <Box>You selected "{modalProps.actions[selectedActionId!]}"</Box>
          )}
        </Box>
      </Flex>
    </>
  );
};
