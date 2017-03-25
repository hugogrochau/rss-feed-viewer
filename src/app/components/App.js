import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RSSFeedViewer from './RSSFeedViewer';

injectTapEventPlugin();

const App = () =>
  <MuiThemeProvider>
    <div id="container">
      <AppBar
        title="RSS Feed Viewer"
        iconElementLeft={<span />}
      />
      <RSSFeedViewer />
    </div>
  </MuiThemeProvider>;

export default App;
