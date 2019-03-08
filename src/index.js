import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App'
let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  // palette: {
  //   primary: {
  //     light: '#63ccff',
  //     main: '#009be5',
  //     dark: '#006db3',
  //   },
  // },
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
    <App theme={theme} />

  </>
  , document.getElementById('root'))
