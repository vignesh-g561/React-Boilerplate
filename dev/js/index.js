import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import BrowserHistory from 'react-router/lib/browserHistory';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import App1 from './components/App';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
  <Router history={ BrowserHistory }>
      <Route path="/" component={App}/>
  </Router>
  </MuiThemeProvider>,
    document.getElementById('root')
);
