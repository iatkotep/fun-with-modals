import React from "react";
import {
  InfoIcon,
  QuestionIcon,
  WarningTwoIcon as WarningIcon,
  WarningIcon as ErrorIcon,
} from "@chakra-ui/icons";

const lookupIconComponent = {
  info: InfoIcon,
  question: QuestionIcon,
  warning: WarningIcon,
  error: ErrorIcon,
};
const lookupIconColor = {
  info: "gray.500",
  question: "gray.500",
  warning: "yellow.500",
  error: "red.500",
};

export type TModalIconType = "info" | "warning" | "error";
const ModalIcon: React.FC<{ type: TModalIconType }> = ({ type }) => {
  const ModalIcon = lookupIconComponent[type];
  return <ModalIcon color={lookupIconColor[type]} mr={1} />;
};

export default ModalIcon;
