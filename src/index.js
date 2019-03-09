import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App'
import { red, indigo } from '@material-ui/core/colors';
import { BrowserRouter } from 'react-router-dom'
let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  palette: {
    type: 'dark',
    primary: { main: "#1a237e", contrastText: "#fff" },
    error: red,
    contrastThreshold: 3,
    tonalOffset: .2
  },
  spacing: {
    unit: 50,
  },
  shape: {
    borderRadius: 8,
  },
});


ReactDOM.render(
  <>
    <CssBaseline />
    <BrowserRouter>
      <App theme={theme} />
    </BrowserRouter>
  </>
  , document.getElementById('root'))
