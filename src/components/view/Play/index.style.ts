// import mui module
import styled from '@emotion/styled';

export const PlayViewStyle = styled('div')(({ theme }: any) => {
  return {
    backgroundColor: theme.colors.primary,
    position: 'absolute',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '.main-container': {
      width: '900px',

      [theme.breakpoints.down("md")]: {
        width: '80%',
      },

      '.change-mode-container': {
        display: 'flex',
        justifyContent: 'center'
      },
    },

    '.button': {
      fontFamily: theme.fonts.mainFont,
      fontWeight: theme.fontWeights.semibold,
      textTransform: 'none',
      height: '2.5rem',
      width: '15rem',
      fontSize: '1.3rem',
    },

    '.bg-white': {
      backgroundColor: theme.colors.white
    },

    '.bg-primary': {
      backgroundColor: theme.colors.primary
    },

    '.color-white': {
      color: theme.colors.white
    },

    '.color-red': {
      color: theme.colors.red
    },

    '.color-primary': {
      color: theme.colors.primary
    },

    '.border-red': {
      borderColor: theme.colors.red
    },

    '.border-white': {
      borderColor: theme.colors.white
    },

    '.size-big': {
      fontSize: theme.fontSize.semibig
    },

    '.size-regular': {
      fontSize: theme.fontSize.regular
    },

    '.text': {
      fontFamily: theme.fonts.mainFont,
      fontWeight: theme.fontWeights.regular,
    },
  }
});