import type { Meta, StoryObj } from "@storybook/react";
import { ModalStory } from "./components";
import * as m from "./mock/test";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Modal/Developer",
  component: ModalStory,
  argTypes: {},
} satisfies Meta<typeof ModalStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dismissible: Story = {
  args: {
    storyTitle: "Dismissible Modal",
    storyDescription: (
      <p>
        `Dismissible` is default version of the Modal. A Dismissible Modal has a
        close button, and automatically
      </p>
    ),
    storyButtonText: "Launch Dismissible Modal",
    modalProps: m.dismissibleProps,
  },
};
export const DismissibleWithCancel: Story = {
  args: {
    storyTitle: "Dismissible Modal with Cancel",
    storyDescription: (
      <p>
        By providing the optional `cancelText` prop with a string value, we
        signal to the modal that we'd like a Cancel button. The button renders
        with the provided text as its label, and provides an additional means to
        eject from the Modal
      </p>
    ),
    storyButtonText: "Launch Dismissible Modal",
    modalProps: m.dismissibleWithCancelProps,
  },
};

export const Blocking: Story = {
  args: {
    storyTitle: "Blocking Modal",
    storyDescription:
      "A blocking Modal renders without a close button, and disables ejection when clicking the Overlay",
    storyButtonText: "Launch Blocking Modal",
    modalProps: m.blockingProps,
  },
};

export const TypeInfo: Story = {
  args: {
    storyTitle: "Info Modal",
    storyDescription: "This is an Info Modal",
    storyButtonText: "Launch Info Modal",
    modalProps: m.infoTypeProps,
  },
};
export const TypeWarning: Story = {
  args: {
    storyTitle: "Info Modal",
    storyDescription: "This is a Warning Modal",
    storyButtonText: "Re-Launch Warning Modal",
    modalProps: m.warningTypeProps,
  },
};
export const TypeError: Story = {
  args: {
    storyTitle: "Info Modal",
    storyDescription: "This is an Error Modal",
    storyButtonText: "Re-Launch Error Modal",
    modalProps: m.errorTypeProps,
  },
};
export const HeavyText: Story = {
  args: {
    storyTitle: "Heavy Text",
    storyDescription: "The modal grows vertically to accommodate more text",
    storyButtonText: "Launch Heavy Text Modal",
    modalProps: m.heavyTextProps,
  },
};

export const OverflowingText: Story = {
  args: {
    storyTitle: "Overflowing Text",
    storyDescription:
      "The modal grows to a max height, determined by browser width, and the modal content becomes scrollable, leaving title and buttons visible",
    storyButtonText: "Launch Overflowing Text Modal",
    modalProps: m.overflowingTextProps,
  },
};

export const InitializeOpen: Story = {
  args: {
    storyTitle: "Initialized Open Modal",
    storyDescription: "This is a description",
    storyButtonText: "Re-Launch Modal",
    modalProps: m.initializeOpenProps,
    isOpenInit: true,
  },
};
