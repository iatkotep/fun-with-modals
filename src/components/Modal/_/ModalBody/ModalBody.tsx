import React from "react";
import { Box } from "@chakra-ui/react";
import { modalBodyHtmlId } from "../../props";

const modalBodyProps = {
  id: modalBodyHtmlId,
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
