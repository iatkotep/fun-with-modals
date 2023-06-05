import React from "react";
import { Box, Text } from "@chakra-ui/react";

export function StoryHeading(props: {
  storyTitle: string;
  storyDescription: React.ReactNode;
}) {
  return (
    <Box mb={10}>
      <Text {...{ fontSize: "2xl", fontWeight: "bold" }}>
        {props.storyTitle}
      </Text>
      <Text>{props.storyDescription}</Text>
    </Box>
  );
}
