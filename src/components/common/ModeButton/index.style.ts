// import mui module
import styled from '@emotion/styled';

export const ModeButtonComponentStyle = styled('div')(({ theme }: any) => {
  return {
    width: '100%',
    cursor: 'pointer',

    '.mode-button': {
      padding: '0.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle: 'solid',
      borderRadius: '5px',
      borderWidth: '1.5px',
      fontSize: '3rem',

      '.grid-item': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.white
      },
    },

    '.active': {
      borderColor: theme.colors.white,
      borderWidth: '2px',
    }
  }
});