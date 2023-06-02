import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

export default Providers;
