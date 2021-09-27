import { ThemeProvider } from "@material-ui/styles";
import { Container } from "./styles"
import { GlobalState } from "./global/GlobalState";
import React from "react"
import Router from "./routes/Router";

const App = () => {
  return (
    <GlobalState>
      <ThemeProvider>
        <Container>
          <Router />
        </Container>
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
