import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secondaryColor } from './colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "#000000"
        },

        secondary: {
            main: secondaryColor
        },
        text: {
            primary: "#000000"
        }
    }
})

export default theme
