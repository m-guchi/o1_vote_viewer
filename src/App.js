import React from 'react';
// import logo from './logo.svg';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import './App.css';
import Main from './viewer/Main'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF850C"
    },
    secondary: {
      main: "#4fc3f7"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
