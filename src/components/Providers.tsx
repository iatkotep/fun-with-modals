import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChakraProvider {...{ theme }}>{children}</ChakraProvider>
);

export default Providers;
