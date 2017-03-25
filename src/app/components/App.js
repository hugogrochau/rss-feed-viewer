import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RSSBar from './RSSBar';

injectTapEventPlugin();

const App = () =>
  <MuiThemeProvider>
    <div id="container">
      <AppBar
        title="RSS Feed Viewer"
        iconElementLeft={<span />}
      />
      <RSSBar />
    </div>
  </MuiThemeProvider>;

export default App;
