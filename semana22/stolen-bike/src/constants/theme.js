import { createTheme } from '@material-ui/core/styles';
import { primaryColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "#a4a4a4"
    },
    text: {
      primary: "#a4a4a4"
    },
  },

  overrides: {
    MuiInput: {
      underline: {
        '&:hover:not($disabled):before': {
          borderBottom: '1px solid rgba(53,151,211,255)',
        },
      },
    },
  },
});


export default theme