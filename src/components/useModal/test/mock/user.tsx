import { IModal } from "../../useModal";

export const confirmationModalProps: IModal = {
  title: "Confirm Deletion",
  children: "Are you sure you want to delete this item?",
  actions: ["Delete"],
  cancelText: "Cancel",
};
export const informationModalProps: IModal = {
  title: "Important Information",
  iconType: "info",
  children: "This is the message that needs to be conveyed.",
  actions: ["OK"],
};
export const warningModalProps: IModal = {
  title: "Something Potentially Bad Just Happened",
  iconType: "warning",
  children:
    "This is a thing that just happened.  It didn't break anything, but it's worth mentioning.",
  actions: ["OK"],
};
export const errorModalProps: IModal = {
  title: "Something Really Bad Just Happened",
  iconType: "error",
  children: "An error occurred.  Please try again later.",
  actions: ["OK"],
  isBlocking: true,
};
export const TermsConditionsModalProps: IModal = {
  title: "This is a Form Modal",
  actions: ["Submit"],
  isBlocking: false,
};
