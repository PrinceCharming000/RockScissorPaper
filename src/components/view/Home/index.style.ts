// import mui module
import styled from '@emotion/styled';

export const HomeViewStyle = styled('div')(({ theme }: any) => {
  return {
    backgroundColor: theme.colors.primary,
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '.main-container': {
      width: '600px',

      [theme.breakpoints.down("sm")]: {
        width: '300px',
      },

      '.link': {
        fontFamily: theme.fonts.mainFont,
        color: theme.colors.white,
        fontSize: theme.fontSize.semibig,
        textDecoration: 'none',

        '&:hover': {
          textDecoration: 'underline'
        }
      }
    }
  }
});