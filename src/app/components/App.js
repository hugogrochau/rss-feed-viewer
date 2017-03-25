import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RSSFeedViewer from './RSSFeedViewer';

injectTapEventPlugin();

/**
 * Main component that adds the Material-UI theme and contains
 * the main AppBar and RSSFeedViewer components
 * @export
 * @class App
 * @extends {React.PureComponent}
 */
export default class App extends React.PureComponent {
  render() {
    return (
      <MuiThemeProvider>
        <div id="container">
          <AppBar title="RSS Feed Viewer" iconElementLeft={< span />}/>
          <RSSFeedViewer/>
        </div>
      </MuiThemeProvider>
    );
  }
}
