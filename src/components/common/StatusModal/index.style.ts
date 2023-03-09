// import mui module
import styled from '@emotion/styled';

export const StatusModalStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '.size-extra': {
      fontSize: '5rem',

      [theme.breakpoints.down("sm")]: {
        fontSize: '2.5rem',
      }
    },

    '.text-shadow': {
      textShadow: '10px 10px 10px rgba(255, 255 ,255, 0.3)'
    },

    '.button-size': {
      width: '20rem'
    }
  }
});