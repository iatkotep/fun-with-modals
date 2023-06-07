import React from "react";
import { Box } from "@chakra-ui/react";

export const StoryBody: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const wrapProps = {
    sx: {
      p: {
        mt: 5,
      },
      "& > *:first-child": {
        mt: 0,
      },
    },
  };
  return <Box {...wrapProps}>{children}</Box>;
};
