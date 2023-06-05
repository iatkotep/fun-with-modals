import React from "react";
import { Box } from "@chakra-ui/react";

const modalBodyProps = {
  sx: {
    "p, ul, ol": {
      mt: "1em",
    },
    "& > *:first-child": {
      mt: 0,
    },
  },
};
const ModalBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box {...modalBodyProps}>{children}</Box>
);

export default ModalBody;
