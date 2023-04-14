import { createTheme } from '@mui/material';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette: {
    primary: {
      main: '#BE6DB7',
    },
    secondary: {
      main: '#FDD36A',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontWeight: 700,
      [breakpoints.up('md')]: {
        fontSize: '64px',
        lineHeight: '78px',
      },
    },
    h2: {
      [breakpoints.up('md')]: {
        fontSize: '36px',
        lineHeight: '44px',
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '20px',
      textTransform: 'uppercase',
      [breakpoints.up('md')]: {
        fontSize: '24px',
        lineHeight: '29px',
      },
    },
    body2: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      [breakpoints.up('md')]: {
        fontSize: '20px',
        lineHeight: '24px',
      },
    },
  },
});

export default theme;