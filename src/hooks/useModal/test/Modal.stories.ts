import type { Meta, StoryObj } from "@storybook/react";

import BasicModal from "./BasicModal";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Modal",
  component: BasicModal,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BasicModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Dismissible: Story = {
  args: {
    title: "Modal Title",
    body: "Modal Body",
    buttonText: "Launch Dismissible Modal",
  },
};
export const Blocking: Story = {
  args: {
    title: "Modal Title",
    body: "Modal Body",
    buttonText: "Launch Blocking Modal",
    isBlocking: true,
  },
};

export const InitializeOpen: Story = {
  args: {
    title: "Modal Title",
    body: "Modal Body",
    buttonText: "Relaunch Modal",
    isOpenInit: true,
  },
};
