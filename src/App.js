import React from 'react';
// import logo from './logo.svg';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import './App.css';
import { Button } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff9800"
    },
    secondary: {
      main: "#4fc3f7"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          <div>O-1 Grand Prix 投票ページ</div>
        </header>
        <h2>予選</h2>
        <Button
          variant="contained"
          color="primary"
          size="large"
        >投票はこちら
        </Button>
        <h2>決勝</h2>
        <Button
          variant="contained"
          color="primary"
          size="large"
        >投票はこちら
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
