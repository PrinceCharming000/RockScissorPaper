import { createTheme } from '@mui/material/styles';

const themeColors = {
  colors: {
    primary: '#2D2166',
    primary20: '#322573',
    primary40: '#433199',
    primary60: '#6953F4',
    green: '#8DC881',
    white: '#ffffff',
    red: '#BD5359'
  }
};

const themeFonts = {
  fonts: {
    mainFont: 'cursive'
  },

  fontWeights: {
    semibold: 900,
    regular: 700,
    light: 400
  },

  fontSize: {
    semibig: '3rem',
    regular: '2rem'
  }
}

export const darkTheme = createTheme({
  ...themeColors,
  ...themeFonts,
  palette: {
    mode: 'dark'
  }
});
