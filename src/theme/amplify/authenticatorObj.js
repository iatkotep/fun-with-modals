import { FontFamily, getThemeColor } from '../_';

export const authenticatorTheme = {
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // paddingTop: 20,
    // width: '100%',
    // backgroundColor: '#FFF',
    padding: 20,
    sx: {
      a: {
        color: '#f00',
      },
    },
  },
  // section: {
  //   flex: 1,
  //   width: '100%',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: 20,
  // },
  // sectionScroll: {
  //   flex: 1,
  //   width: '100%',
  //   paddingHorizontal: 20,
  // },
  sectionHeader: {
    color: getThemeColor('blue'),
    fontFamily: FontFamily.serif,
    fontSize: 29,
    fontWeight: 700,
    lineHeight: 1.0580204778,
    marginBottom: 32,
    paddingTop: 20,
    textAlign: 'center',
    width: '100%',
  },
  // sectionHeaderText: {
  // fontSize: 20,
  // fontWeight: '500',
  // },
  // sectionFooter: {
  //   width: '100%',
  //   padding: 10,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginTop: 15,
  //   marginBottom: 20,
  // },
  sectionFooterLink: {
    fontSize: 14,
    color: getThemeColor('green'),
    alignItems: 'baseline',
    textAlign: 'center',
  },
  // sectionFooterLinkDisabled: {
  //   fontSize: 14,
  //   color: disabledButtonColor,
  //   alignItems: 'baseline',
  //   textAlign: 'center',
  // },
  // navBar: {
  //   marginTop: 35,
  //   padding: 15,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  // },
  // navButton: {
  //   marginLeft: 12,
  //   borderRadius: 4,
  // },
  // cell: {
  //   flex: 1,
  //   width: '50%',
  // },
  // errorRow: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },
  // errorRowIcon: {
  //   height: 25,
  //   width: 25,
  // },
  // errorRowText: {
  //   marginLeft: 10,
  // },
  // photo: {
  //   width: '100%',
  // },
  // album: {
  //   width: '100%',
  // },
  button: {
    backgroundColor: getThemeColor('green'),
    color: '#fff',
    fontFamily: FontFamily.serif,
    height: 40,
    alignItems: 'center',
    borderRadius: 100,
    padding: '0 20px',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  // buttonDisabled: {
  //   backgroundColor: disabledButtonColor,
  //   alignItems: 'center',
  //   padding: 16,
  // },
  buttonText: {
    // color: '#fff',
    // fontFamily: FontFamily.serif,
  },
  formField: {
    marginBottom: 22,
  },
  input: {
    padding: '0 16px',
    height: 50,
    boxSizing: 'border-box',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: getThemeColor('brown'),
    color: getThemeColor('brown'),
    width: '100%',
  },
  inputLabel: {
    fontWeight: 700,
  },
  // phoneContainer: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // phoneInput: {
  //   flex: 2,
  //   padding: 16,
  //   borderWidth: 1,
  //   borderRadius: 3,
  //   borderColor: textInputBorderColor,
  //   color: textInputColor,
  // },
  // picker: {
  //   flex: 1,
  //   height: 44,
  // },
  // pickerItem: {
  //   height: 44,
  // },
  // signedOutMessage: {
  //   textAlign: 'center',
  //   padding: 20,
  // },
};
