import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import RSSBar from './RSSBar';

/**
 * Component that displays the RSS url input and submit button.
 * When the submit button is pressed it validates the RSS url given.
 * If it is a valid RSS url it fetches the contents of the feed and displays it.
 * If it is an invalid RSS url it gives an appropriate error.
 * @export
 * @class RSSFeedViewer
 * @extends {React.Component}
 */
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
