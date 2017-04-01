import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './componenets/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Main/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
