import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import isURL from 'validator/lib/isURL';
import RSSInputBar from './RSSInputBar';
import RSSFeedViewerResults from './RSSFeedViewerResults';
import { fetchRSSJSON } from '../../util/remote-calls';
import rssUrls from '../../data/rss-urls.json';

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
      rssUrl: rssUrls[Math.floor(Math.random() * rssUrls.length)],
      feedData: false,
    };
  }
  onSubmit() {
    this.setState({ loading: true });
    fetchRSSJSON(this.state.rssUrl)
      .then((feedData) => {
        this.setState({ feedData, loading: false, error: false });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }

  onRSSInputBarChange(_, rssUrl) {
    if (isURL(rssUrl)) {
      this.setState({ rssUrl, error: false });
    } else {
      this.setState({ error: 'URL is invalid' });
    }
  }

  render() {
    const buttonLabel = this.state.loading ? 'Loading...' : 'Submit';
    return (
      <div>
        <RSSInputBar
          onChange={this.onRSSInputBarChange.bind(this)}
          errorText={this.state.error || ''}
          defaultValue={this.state.rssUrl}
         />
        <RaisedButton
          label={buttonLabel}
          fullWidth
          primary
          disabled={this.state.loading}
          onTouchTap={this.onSubmit.bind(this)}/>
        {this.state.feedData && (
          <RSSFeedViewerResults feedData={this.state.feedData} />
        )}
      </div>
    );
  }
}

export default RSSFeedViewer;
