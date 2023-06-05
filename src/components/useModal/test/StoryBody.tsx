import React from "react";
import { Box } from "@chakra-ui/react";

export const StoryBody: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const wrapProps = {
    borderWidth: "1px",
    borderColor: "gray.200",
    padding: 5,
    borderRadius: 5,
  };
  return <Box {...wrapProps}>{children}</Box>;
};
