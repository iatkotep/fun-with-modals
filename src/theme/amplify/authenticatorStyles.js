import { getThemeColor, getTypography } from '../_';

const generateDescriptiveTextProps = (Selector, text) => ({
  [`${Selector}:after`]: {
    content: `"${text}"`,
    ...getTypography('copy'),
    color: getThemeColor('brown'),
    mt: '20px',
    display: 'block',
  },
});

const Element = {
  SignInHeader: '[data-test="sign-in-header-section"]',
  SignInFooter: '[data-test="sign-in-footer-section"]',
  ResetPasswordHeader: '[data-test="forgot-password-header-section"]',
  ErrorText: '[data-test="authenticator-error"]',
};

const Selector = {
  AuthenticatorContainer: '[class^="Section__container__"]',
  Form: '[class^="Form__formContainer__"]',
  FormSection: '[class^="Form__formSection__"]',
  SectionHeader: '[class^="Section__sectionHeader__"]',
  SectionBody: '[class^="Section__sectionBody__"]',
  SectionFooter: '[class^="Section__sectionFooter___"]',
  SectionFooterCell__Primary:
    '[class^="Section__sectionFooterPrimaryContent__"]',
  SectionFooterCell__Secondary:
    '[class^="Section__sectionFooterSecondaryContent__"]',
  HintText: '[class^="Hint__hint__"]',
};

const standardGutter = '20px';
export const authenticatorStyles = {
  [Selector.AuthenticatorContainer]: {
    // Authenticator Wrap Styles
    w: '100%',
    maxW: '380px',
    m: '0 auto',
    a: {
      color: getThemeColor('green'),
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  [`${Element.SignInFooter} ${Selector.SectionFooterCell__Secondary}`]: {
    display: 'none',
  },
  [`${Element.ErrorText}`]: {
    color: getThemeColor('red'),
  },

  // ...generateDescriptiveTextProps(
  //   Element.SignInHeader,
  //   'If this is your first time signing in, use the temporary password that was emailed to you.'
  // ),

  ...generateDescriptiveTextProps(
    Element.ResetPasswordHeader,
    'Enter your account email address to receive an email with a code, then enter that code and your new password.'
  ),

  [Selector.Form]: {
    // Form Container Styles

    [Selector.FormSection]: {
      // Form Section Styles

      [Selector.SectionHeader]: {
        // Form Section Header Styles
      },
      [Selector.SectionBody]: {
        // Form Section Body Styles
      },
      [Selector.SectionFooter]: {
        // Form Footer Styles
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',

        [Selector.SectionFooterCell__Primary]: {
          // Form Footer Primary Styles
          flex: '0 0 100%',
        },
        [Selector.SectionFooterCell__Secondary]: {
          // Form Footer Secondary Styles
          mt: '20px',
          flex: '0 0 100%',
        },
      },
    },
  },
  [Selector.HintText]: {
    mt: '5px',
    fontSize: '0.9em',
  },
};
