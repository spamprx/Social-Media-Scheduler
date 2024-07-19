import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1DA1F2', // Twitter blue
      light: '#60B8FF',
      dark: '#0084B4',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3B5998', // Facebook blue
      light: '#6680BF',
      dark: '#2F477A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F8FA', // Light gray background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#14171A',
      secondary: '#657786',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;