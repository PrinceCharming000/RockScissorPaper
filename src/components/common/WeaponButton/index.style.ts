// import mui module
import styled from '@emotion/styled';

export const WeaponButtonComponentStyle = styled('div')(({ theme }: any) => {
  return {
    cursor: 'pointer',

    '.weapon-button': {
      width: '8rem',
      height: '8rem',
      fontSize: '2rem',
      borderRadius: '50%',
      backgroundColor: theme.colors.white,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      [theme.breakpoints.down('sm')]: {
        width: '5rem',
        height: '5rem'
      },

      '&:hover': {
        backgroundColor: theme.colors.white,
      },

      '.icon-img': {
        width: '4rem',
        height: '4rem',

        [theme.breakpoints.down('sm')]: {
          width: '3rem',
          height: '3rem'
        }
      }
    },

    '.active': {
      borderStyle: 'solid',
      borderWidth: '15px',
      borderColor: theme.colors.green,

      [theme.breakpoints.down('sm')]: {
        borderWidth: '7px'
      }
    }
  }
});