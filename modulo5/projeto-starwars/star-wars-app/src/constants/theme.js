import { createTheme } from '@material-ui/core/styles';
import { primaryColor, neutralColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: '#ffff00',
    },
    text: {
        primary: neutralColor
    }
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  }
});

export default theme