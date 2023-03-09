// import mui module
import styled from '@emotion/styled';

export const ModeSettingModalStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '.color-white': {
      color: theme.colors.white
    },

    '.bg-primary40': {
      backgroundColor: theme.colors.primary40
    },

    '.text': {
      fontFamily: theme.fonts.mainFont,
      fontWeight: theme.fontWeights.regular,
      fontSize: '1.3rem'
    },

    '.cursor-pointer': {
      cursor: 'pointer'
    },

    '.mode-icon': {
      width: '5rem',
      height: '5rem'
    },

    '.modal': {
      width: '40rem',
      backgroundColor: theme.colors.primary20,
      borderRadius: '5px',
      padding: '1.5rem 1.5rem',

      [theme.breakpoints.down("sm")]: {
        width: '80%'
      },

      '.modal-header': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },

      '.modal-content': {
        width: '100%'
      },

      '.modal-footer': {
        height: '3.5rem',

        '.confirm-button': {
          width: '100%',
          height: '100%'
        }
      }
    },
  }
});