// import mui module
import styled from '@emotion/styled';

export const ResultViewStyle = styled('div')(({ theme }: any) => {
  return {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',

    '.grid-item': {
      display: 'flex',
      justifyContent: 'center'
    }
  }
});