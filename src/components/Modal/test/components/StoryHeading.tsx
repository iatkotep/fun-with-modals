import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { StoryBody } from "./StoryBody";

export const StoryHeading: React.FC<{
  storyTitle: string;
  storyDescription: React.ReactNode;
}> = ({ storyTitle, storyDescription }) => {
  const headingProps = {
    borderBottomWidth: "1px",
    borderColor: "gray.200",
    pb: 3,
    mb: 5,
  };
  return (
    <Box {...headingProps}>
      <Text {...{ fontSize: "2xl", fontWeight: "bold" }}>{storyTitle}</Text>
      <StoryBody>
        <Text>{storyDescription}</Text>
      </StoryBody>
    </Box>
  );
};
