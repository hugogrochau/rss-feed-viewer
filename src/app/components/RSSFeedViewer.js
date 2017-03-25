import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import RSSBar from './RSSBar';

export class RSSFeedViewer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
    };
  }
  onSubmit() {
    this.setState({
      loading: true,
    });
  }

  render() {
    const buttonLabel = this.state.loading ? 'Loading...' : 'Submit';
    return (
      <div>
        <RSSBar/>
        <RaisedButton
          label={buttonLabel}
          fullWidth
          primary
          disabled={this.state.loading}
          onTouchTap={this.onSubmit.bind(this)}/>
      </div>
    );
  }
}

export default RSSFeedViewer;
