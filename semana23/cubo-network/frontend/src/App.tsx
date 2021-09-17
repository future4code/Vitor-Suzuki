import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Router from "./routes/Router"
import theme from "./constants/theme"

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
