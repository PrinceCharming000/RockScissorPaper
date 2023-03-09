// import mui module
import styled from '@emotion/styled';

export const WeaponViewStyle = styled('div')(({ theme }: any) => {
  return {
    width: '100%',

    '.weapons-container': {
      display: 'flex',
      justifyContent: 'space-evenly',
      fontSize: '20rem',
    },

    '.confirm-container': {
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '.confirm-button': {
        height: '3rem'
      }
    }
  }
});