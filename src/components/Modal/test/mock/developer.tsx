import { IModal } from "../../useModal";

// Single Option
const commonSingleOptionProps = {
  title: "You Have One Option",
  children:
    "There is only one option.  You may cancel out of this modal, but you must choose the option to proceed.",
  actions: ["Ok"],
};
export const dismissibleProps: IModal = {
  title: "You Have One Action",
  children:
    "There is only one Action to take.  You may Close or click the Overlay to eject, but you must choose `Ok` to proceed.",
  actions: ["Ok"],
};
export const initializeOpenProps: IModal = {
  title: "Initialize Open",
  children:
    "By supplying a true value to the `isOpenInit` parameter of the `Modal` hook, the state of the modal can be initialized to Open",
  actions: ["Ok"],
};
export const dismissibleWithCancelProps: IModal = {
  ...dismissibleProps,
  title: "You have one Action, with the option to Cancel",
  cancelText: "Cancel",
  children:
    'There is only one Action.  You may Close, Cancel, or click the Overlay to eject, but you must choose `Ok` to proceed."',
};
export const blockingProps: IModal = {
  title: "You Have One Option",
  children:
    "There is only one option. You cannot eject. There are no Close or Cancel buttons in a Blocking Modal, and Overlay ejection is disabled.  Clicking the button is the only action that can be taken.",
  actions: ["Take Only Available Action"],
  isBlocking: true,
};
export const infoTypeProps: IModal = {
  ...commonSingleOptionProps,
  iconType: "info",
  actions: ["Confirm Info"],
};
export const warningTypeProps: IModal = {
  ...commonSingleOptionProps,
  iconType: "warning",
  actions: ["Acknowledge Warning"],
};
export const errorTypeProps: IModal = {
  ...commonSingleOptionProps,
  actions: ["Acknowledge Error"],
  iconType: "error",
};
export const heavyTextProps: IModal = {
  ...commonSingleOptionProps,
  title: "Heavy Text",
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  ),
  actions: ["Confirmed"],
};

export const overflowingTextProps: IModal = {
  title: "Overflowing Text",
  children: (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies
        tristique nulla aliquet enim tortor. Eleifend quam adipiscing vitae
        proin sagittis nisl rhoncus. Nibh venenatis cras sed felis eget. Nunc
        sed id semper risus in hendrerit. Tincidunt eget nullam non nisi est.
        Commodo ullamcorper a lacus vestibulum. Viverra nam libero justo laoreet
        sit amet cursus sit. Egestas diam in arcu cursus euismod quis viverra
        nibh cras. Sed odio morbi quis commodo. Ultrices tincidunt arcu non
        sodales neque sodales ut etiam. Suscipit tellus mauris a diam maecenas
        sed enim ut. Volutpat commodo sed egestas egestas fringilla phasellus.
        Nunc non blandit massa enim nec dui nunc mattis. Proin libero nunc
        consequat interdum varius sit.
      </p>
      <p>
        Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Vitae
        suscipit tellus mauris a diam maecenas sed enim. Lobortis scelerisque
        fermentum dui faucibus in ornare. Platea dictumst vestibulum rhoncus
        est. Ut etiam sit amet nisl purus in. Ac orci phasellus egestas tellus
        rutrum tellus pellentesque eu. Maecenas volutpat blandit aliquam etiam
        erat velit. Augue neque gravida in fermentum. Sollicitudin nibh sit amet
        commodo nulla. In pellentesque massa placerat duis. Pellentesque massa
        placerat duis ultricies. Dui ut ornare lectus sit amet. Nec feugiat nisl
        pretium fusce id velit.
      </p>
      <p>
        Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Justo
        laoreet sit amet cursus sit amet dictum sit amet. Facilisi nullam
        vehicula ipsum a. Dui faucibus in ornare quam viverra orci. Sollicitudin
        tempor id eu nisl nunc mi ipsum. Scelerisque eleifend donec pretium
        vulputate. Diam vel quam elementum pulvinar etiam non quam lacus
        suspendisse. Cras ornare arcu dui vivamus arcu felis bibendum ut. Massa
        enim nec dui nunc mattis enim. Mauris rhoncus aenean vel elit
        scelerisque mauris pellentesque. Donec enim diam vulputate ut pharetra
        sit. Porta nibh venenatis cras sed. Lobortis feugiat vivamus at augue
        eget arcu dictum varius. Tellus mauris a diam maecenas.
      </p>
      <p>
        Amet porttitor eget dolor morbi non arcu risus quis varius. Pretium quam
        vulputate dignissim suspendisse in. Amet aliquam id diam maecenas
        ultricies mi. Elementum nisi quis eleifend quam. Id semper risus in
        hendrerit gravida rutrum quisque. Mattis molestie a iaculis at erat
        pellentesque adipiscing commodo. Fermentum et sollicitudin ac orci
        phasellus egestas tellus rutrum. Suspendisse potenti nullam ac tortor.
        Nisi vitae suscipit tellus mauris a diam. Donec et odio pellentesque
        diam volutpat commodo sed egestas. Sagittis orci a scelerisque purus
        semper eget duis at tellus. Condimentum lacinia quis vel eros. Nisl nisi
        scelerisque eu ultrices vitae auctor eu. Est ultricies integer quis
        auctor. Lacus luctus accumsan tortor posuere ac ut. Cursus sit amet
        dictum sit amet justo donec enim diam.
      </p>
    </>
  ),
  actions: ["Confirmed"],
};
