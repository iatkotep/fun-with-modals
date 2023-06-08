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
export const multipleChoiceProps: IModal = {
  title: "Who is your favorite Beatle?",
  children: "Which of the Fab Four is your favorite?",
  actions: ["John", "Paul", "George", "Ringo"],
};
export const termsConditionsModalProps: IModal = {
  title: "Terms and Conditions",
  children: (
    <>
      <p>
        These terms and conditions ("Agreement") govern your use of the demo
        webpage ("Website") provided by [Your Company Name]. By accessing or
        using the Website, you agree to be bound by this Agreement. If you do
        not agree with any part of this Agreement, you must not use the Website.
      </p>
      <h3>Intellectual Property</h3>
      <p>
        All content on the Website, including but not limited to text, graphics,
        logos, images, videos, and software, is the property of [Your Company
        Name] or its licensors and is protected by intellectual property laws.
        You may not modify, reproduce, distribute, display, or create derivative
        works of any content on the Website without prior written permission
        from [Your Company Name].
      </p>
      <h3>User Conduct</h3>
      <p>
        You agree to use the Website for lawful purposes and in a manner that
        does not infringe upon or restrict the rights of others. You shall not
        engage in any activity that could harm, disable, overburden, or impair
        the Website or interfere with the use of the Website by others.
      </p>
      <h3>Third-Party Websites</h3>
      <p>
        The Website may contain links to third-party websites that are not owned
        or controlled by [Your Company Name]. [Your Company Name] has no control
        over, and assumes no responsibility for, the content, privacy policies,
        or practices of any third-party websites. By accessing third-party
        websites, you do so at your own risk and you agree that [Your Company
        Name] shall not be liable for any damages or loss arising from your use
        of such websites.
      </p>
      <h3>Disclaimer of Warranty</h3>
      <p>
        The Website is provided on an "as is" and "as available" basis, without
        any warranties or representations of any kind, express or implied. [Your
        Company Name] does not warrant that the Website will be error-free,
        uninterrupted, secure, or free from viruses or other harmful components.
        [Your Company Name] shall not be liable for any direct, indirect,
        incidental, special, or consequential damages arising out of or in
        connection with the use of the Website.
      </p>
      <h3>Modifications</h3>
      <p>
        [Your Company Name] reserves the right to modify or terminate the
        Website or any part thereof at any time without notice. [Your Company
        Name] may also revise this Agreement from time to time without notice,
        and your continued use of the Website after any modifications signifies
        your acceptance of the revised terms.
      </p>
      <h3>Governing Law</h3>
      <p>
        This Agreement shall be governed by and construed in accordance with the
        laws of [Your Country/State].
      </p>
      <p>
        Any dispute arising out of or in connection with this Agreement shall be
        submitted to the exclusive jurisdiction of the courts of [Your
        Country/State].
      </p>
      <p>
        Please read this Agreement carefully before using the Website. If you
        have any questions or concerns regarding these terms and conditions,
        please contact us at [Your Contact Email].
      </p>
    </>
  ),
  actions: ["Accept"],
  cancelText: "Decline",
  isBlocking: false,
};
