import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import RSSBar from './RSSBar';
import { fetchRSSJSON } from '../../remoteCalls';

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
      rssUrl: '',
      feedData: {},
    };
  }
  onSubmit() {
    this.setState({ loading: true });
    fetchRSSJSON(this.state.rssUrl)
      .then((feedData) => {
        this.setState({ feedData, loading: false });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }

  onRSSBarChange(_, rssUrl) {
    this.setState({ rssUrl });
  }

  render() {
    const buttonLabel = this.state.loading ? 'Loading...' : 'Submit';
    return (
      <div>
        <RSSBar onChange={this.onRSSBarChange.bind(this)}/>
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
