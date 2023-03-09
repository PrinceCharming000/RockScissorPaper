// import mui module
import styled from '@emotion/styled';

export const ModeSettingComponentStyle = styled('div')(({ theme }: any) => {
  return {
    width: '100%',
    cursor: 'pointer',

    '.mode-show': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      [theme.breakpoints.down('sm')]: {
        // flexDirection: 'column'
      }
    },

    '.gaps': {
      marginLeft: '2rem',

      [theme.breakpoints.down('sm')]: {
        marginLeft: '0.5rem',
      }
    },

    '.text': {
      fontFamily: theme.fonts.mainFont,
    },

    '.text-red': {
      color: theme.colors.red
    },

    '.text-white': {
      color: theme.colors.white,
    },

    '.font-big': {
      fontSize: theme.fontSize.semibig,

      [theme.breakpoints.down("sm")]: {
        fontSize: theme.fontSize.regular
      }
    },

    '.font-regular': {
      fontSize: theme.fontSize.regular,

      [theme.breakpoints.down("sm")]: {
        fontSize: '1.5rem'
      }
    }
  }
});