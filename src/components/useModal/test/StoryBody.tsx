import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const StoryHeading: React.FC<{
  storyTitle: string;
  storyDescription: React.ReactNode;
}> = ({ storyTitle, storyDescription }) => (
  <Box mb={10}>
    <Text {...{ fontSize: "2xl", fontWeight: "bold" }}>{storyTitle}</Text>
    <Text>{storyDescription}</Text>
  </Box>
);
