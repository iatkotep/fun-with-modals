import React from "react";
import {
  InfoIcon,
  WarningIcon as ErrorIcon,
  WarningTwoIcon as WarningIcon,
} from "@chakra-ui/icons";
import { TModalIconType } from "./useModal";

const lookupIconComponent = {
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon,
};
const lookupIconColor = {
  info: "gray.500",
  warning: "yellow.500",
  error: "red.500",
};

const ModalIcon: React.FC<{ type: TModalIconType }> = ({ type }) => {
  const ModalIcon = lookupIconComponent[type];
  return <ModalIcon color={lookupIconColor[type]} mr={1} />;
};

export default ModalIcon;
