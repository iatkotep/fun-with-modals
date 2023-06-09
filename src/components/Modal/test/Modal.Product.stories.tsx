import type { Meta, StoryObj } from "@storybook/react";
import * as m from "./mock/product";
import { ModalUserStory } from "./components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Modal/Product",
  component: ModalUserStory,
  argTypes: {},
} satisfies Meta<typeof ModalUserStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConfirmationModal: Story = {
  args: {
    userStory: (
      <>
        <p>
          As a user, I want to confirm my action and prevent interaction with
          the rest of the page until I make a choice.
        </p>
        <p>In this example, I perform a permanent `Delete` Action.</p>
      </>
    ),
    storyButtonText: "Perform Delete Action",
    modalProps: m.confirmationModalProps,
  },
};
export const MultipleChoiceModal: Story = {
  args: {
    userStory: (
      <>
        <p>As a user, I want to choose one of several options</p>
      </>
    ),
    storyButtonText: "Launch Multiple Choice Modal",
    modalProps: m.multipleChoiceProps,
  },
};
export const TermsAndConditionsModal: Story = {
  args: {
    userStory: (
      <>
        <p>
          As a user, I want to be presented with Terms and Conditions, and be
          able to either Accept or Decline.
        </p>
      </>
    ),
    storyButtonText: "Launch Terms and Condtions Modal",
    modalProps: m.termsConditionsModalProps,
  },
};
export const InformationModal: Story = {
  args: {
    userStory: <p>As a user, I want to view important information</p>,
    storyButtonText: "Launch Modal",
    modalProps: m.informationModalProps,
  },
};
export const WarningModal: Story = {
  args: {
    userStory: (
      <p>
        As a user, I want to be notified about a potentially problematic event
      </p>
    ),
    storyButtonText: "Launch Modal",
    modalProps: m.warningModalProps,
  },
};
export const ErrorModal: Story = {
  args: {
    userStory: <p>As a user, I want to be notified about a critical error</p>,
    storyButtonText: "Launch Modal",
    modalProps: m.errorModalProps,
  },
};
