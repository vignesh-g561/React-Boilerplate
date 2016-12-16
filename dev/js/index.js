import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <App />
  </MuiThemeProvider>,
    document.getElementById('root')
);
