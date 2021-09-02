import { createTheme } from '@material-ui/core/styles';
import { primaryColor, secondaryColor } from './colors';

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
});


export default theme