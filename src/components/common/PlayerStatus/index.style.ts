// import mui module
import styled from '@emotion/styled';

export const PlayerStatusComponentStyle = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',
    justifyContent: 'center',

    '.text': {
      fontFamily: theme.fonts.mainFont,
      fontWeight: theme.fontWeights.regular,
      fontSize: theme.fontSize.regular,
    },

    '.color-white': {
      color: theme.colors.white,
    },

    '.main-container': {
      '.name-typo': {
        textAlign: 'center',
        textTransform: 'uppercase',
      },

      '.weapon': {
        margin: 'auto',
        marginTop: '1rem',
        borderRadius: '50%',
        borderStyle: 'dashed',
        width: '12rem',
        height: '12rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '8rem',
        fontWeight: theme.fontWeights.regular,

        [theme.breakpoints.down('md')]: {
          width: '10rem',
          height: '10rem'
        },

        '.icon-img': {
          width: '8rem',
          height: '8rem'
        }
      },

      '.score': {
        margin: 'auto',
        marginTop: '1.5rem',
        borderColor: theme.colors.white,
        borderStyle: 'dotted',
        borderWidth: '1px',
        borderRadius: '10px',
        width: '5rem',
        display: 'flex',
        justifyContent: 'center',
      }
    },
  }
});