import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import RSSBar from './RSSBar';

const RSSFeedViewer = () =>
  <div>
    <RSSBar />
    <RaisedButton
      label="Submit"
      fullWidth
      primary
    />
  </div>;

export default RSSFeedViewer;
