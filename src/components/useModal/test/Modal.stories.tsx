import type { Meta, StoryObj } from "@storybook/react";
import ModalStory from "./ModalStory";
import * as m from "./mock";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Modal",
  component: ModalStory,
  tags: ["autodocs"],
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
    storyTitle: "Dismissible Modal",
    storyDescription: (
      <p>
        `Dismissible` is default version of the Modal. A Dismissible Modal has a
        close button, and automatically
      </p>
    ),
    storyButtonText: "Launch Dismissible Modal",
    modalProps: m.dismissibleWithCancelProps,
  },
};

export const Blocking: Story = {
  args: {
    storyTitle: "Blocking Modal",
    storyDescription: "This is a description",
    storyButtonText: "Launch Blocking Modal",
    modalProps: m.blockingProps,
  },
};

export const InitializeOpen: Story = {
  args: {
    storyTitle: "Initialized Open Modal",
    storyDescription: "This is a description",
    storyButtonText: "Re-Launch Modal",
    isOpenInit: true,
    modalProps: m.dismissibleProps,
  },
};
export const HeavyText: Story = {
  args: {
    storyTitle: "Heavy Text",
    storyDescription: "The modal grows vertically to accommodate more text",
    isOpenInit: true,
    modalProps: m.heavyTextProps,
  },
};
export const OverflowingText: Story = {
  args: {
    storyTitle: "Overflowing Text",
    storyDescription:
      "The modal grows to a max height, determined by browser width, and the modal content becomes scrollable, leaving title and buttons visible",
    isOpenInit: true,
    modalProps: m.overflowingTextProps,
  },
};
export const TypeInfo: Story = {
  args: {
    storyTitle: "Info Modal",
    storyDescription: <p>This is an Info Modal</p>,
    storyButtonText: "Re-Launch Info Modal",
    isOpenInit: true,
    modalProps: m.infoTypeProps,
  },
};
export const TypeWarning: Story = {
  args: {
    storyTitle: "Info Modal",
    storyDescription: <p>This is a Warning Modal</p>,
    storyButtonText: "Re-Launch Warning Modal",
    isOpenInit: true,
    modalProps: m.warningTypeProps,
  },
};
export const TypeError: Story = {
  args: {
    storyTitle: "Info Modal",
    storyDescription: <p>This is an Error Modal</p>,
    storyButtonText: "Re-Launch Error Modal",
    isOpenInit: true,
    modalProps: m.errorTypeProps,
  },
};

// export const ManyActions: Story = {
//   args: {
//     title: "Neo's Choice",
//     body: "Who is your favorite reindeer?",
//     actions: actions_many,
//   },
// };
//
// export const VeryLongBody: Story = {
//   args: {
//     title: "Neo's Choice",
//     body: (
//       <>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </p>
//         <p>
//           Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//           accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
//           ab illo inventore veritatis et quasi architecto beatae vitae dicta
//           sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
//           aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
//           qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
//           dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
//           quia non numquam eius modi tempora incidunt ut labore et dolore magnam
//           aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
//           exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
//           ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
//           ea voluptate velit esse quam nihil molestiae consequatur, vel illum
//           qui dolorem eum fugiat quo voluptas nulla pariatur?
//         </p>
//       </>
//     ),
//     actions: actions_many,
//   },
// };
