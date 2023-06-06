import React from "react";
import useModal, { IModal } from "../useModal";
import { Box, Button, Flex } from "@chakra-ui/react";
import { isNull } from "../../../global/helpers";
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

const ModalStory: React.FC<IModalStory> = ({
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies
        tristique nulla aliquet enim tortor. Eleifend quam adipiscing vitae
        proin sagittis nisl rhoncus. Nibh venenatis cras sed felis eget. Nunc
        sed id semper risus in hendrerit. Tincidunt eget nullam non nisi est.
        Commodo ullamcorper a lacus vestibulum. Viverra nam libero justo laoreet
        sit amet cursus sit. Egestas diam in arcu cursus euismod quis viverra
        nibh cras. Sed odio morbi quis commodo. Ultrices tincidunt arcu non
        sodales neque sodales ut etiam. Suscipit tellus mauris a diam maecenas
        sed enim ut. Volutpat commodo sed egestas egestas fringilla phasellus.
        Nunc non blandit massa enim nec dui nunc mattis. Proin libero nunc
        consequat interdum varius sit.
      </p>
      <p>
        Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Vitae
        suscipit tellus mauris a diam maecenas sed enim. Lobortis scelerisque
        fermentum dui faucibus in ornare. Platea dictumst vestibulum rhoncus
        est. Ut etiam sit amet nisl purus in. Ac orci phasellus egestas tellus
        rutrum tellus pellentesque eu. Maecenas volutpat blandit aliquam etiam
        erat velit. Augue neque gravida in fermentum. Sollicitudin nibh sit amet
        commodo nulla. In pellentesque massa placerat duis. Pellentesque massa
        placerat duis ultricies. Dui ut ornare lectus sit amet. Nec feugiat nisl
        pretium fusce id velit.
      </p>
      <p>
        Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Justo
        laoreet sit amet cursus sit amet dictum sit amet. Facilisi nullam
        vehicula ipsum a. Dui faucibus in ornare quam viverra orci. Sollicitudin
        tempor id eu nisl nunc mi ipsum. Scelerisque eleifend donec pretium
        vulputate. Diam vel quam elementum pulvinar etiam non quam lacus
        suspendisse. Cras ornare arcu dui vivamus arcu felis bibendum ut. Massa
        enim nec dui nunc mattis enim. Mauris rhoncus aenean vel elit
        scelerisque mauris pellentesque. Donec enim diam vulputate ut pharetra
        sit. Porta nibh venenatis cras sed. Lobortis feugiat vivamus at augue
        eget arcu dictum varius. Tellus mauris a diam maecenas.
      </p>
      <p>
        Amet porttitor eget dolor morbi non arcu risus quis varius. Pretium quam
        vulputate dignissim suspendisse in. Amet aliquam id diam maecenas
        ultricies mi. Elementum nisi quis eleifend quam. Id semper risus in
        hendrerit gravida rutrum quisque. Mattis molestie a iaculis at erat
        pellentesque adipiscing commodo. Fermentum et sollicitudin ac orci
        phasellus egestas tellus rutrum. Suspendisse potenti nullam ac tortor.
        Nisi vitae suscipit tellus mauris a diam. Donec et odio pellentesque
        diam volutpat commodo sed egestas. Sagittis orci a scelerisque purus
        semper eget duis at tellus. Condimentum lacinia quis vel eros. Nisl nisi
        scelerisque eu ultrices vitae auctor eu. Est ultricies integer quis
        auctor. Lacus luctus accumsan tortor posuere ac ut. Cursus sit amet
        dictum sit amet justo donec enim diam.
      </p>
    </>
  );
};

export default ModalStory;
