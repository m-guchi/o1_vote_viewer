import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider, useCookies  } from 'react-cookie';
// import logo from './logo.svg';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import './App.css';
import User from './viewer/User';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF850C"
    },
    secondary: {
      main: "#72d665"
    }
  }
});

function App() {  
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
            <User />
        </ThemeProvider>
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
