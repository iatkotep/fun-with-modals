import React from "react";
import useModal, { IModal } from "../../useModal";
import { Box, Button, Flex } from "@chakra-ui/react";
import { isNull } from "../../../../global/helpers";
import { StoryHeading } from "./StoryHeading";
import { StoryBody } from "./StoryBody";

interface IModalStory {
  storyTitle: string;
  storyDescription: React.ReactNode;
  modalProps: IModal;
  isOpenInit?: boolean;
  storyButtonText?: string;
}

const flexCellProps = {
  flex: 1,
  gap: 10,
};

export const ModalStory: React.FC<IModalStory> = ({
  storyTitle,
  storyDescription,
  modalProps,
  isOpenInit = false,
  storyButtonText = "Launch Modal",
}) => {
  const { Modal, openModal, selectedActionId } = useModal(isOpenInit);

  return (
    <>
      <StoryHeading {...{ storyTitle, storyDescription }} />
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
