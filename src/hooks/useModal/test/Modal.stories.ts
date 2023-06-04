import type { Meta, StoryObj } from "@storybook/react";

import ModalStory from "./ModalStory";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Modal",
  component: ModalStory,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ModalStory>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const actions_2 = ["Take the Red Pill", "Take the Blue Pill"];
const actions_1 = ["Sir, Yes Sir!"];
const actions_many = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Donner",
  "Blitzen",
  "Rudolph",
];
const actions_too_many = [
  "Dasher",
  "Dancer",
  "Prancer",
  "Vixen",
  "Comet",
  "Cupid",
  "Donner",
  "Blitzen",
  "Rudolph",
];

export const SingleAction: Story = {
  args: {
    title: "You Have One Option",
    body: "There is only one option.  You must take it in order to proceed.",
    actions: actions_1,
  },
};
export const TwoActions: Story = {
  args: {
    title: "Neo's Choice",
    body: "You take the blue pill... the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill... you stay in Wonderland, and I show you how deep the rabbit hole goes.",
    actions: actions_2,
  },
};

export const ManyActions: Story = {
  args: {
    title: "Neo's Choice",
    body: "Who is your favorite reindeer?",
    actions: actions_many,
  },
};
