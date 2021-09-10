import { createTheme } from '@material-ui/core/styles'
import { primaryColor, secondaryColor } from "./colors"

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        text: {
            primary: secondaryColor
        }
    },
});

export default theme