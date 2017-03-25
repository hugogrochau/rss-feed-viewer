import React from 'react';
import Paper from 'material-ui/Paper';
import FeedHeaderCard from './FeedHeaderCard';
import FeedItemCard from './FeedItemCard';

/**
 * Passes the feed data to the FeedItemCard and FeedHeaderCard components
 * @class RSSFeedViewerResults
 * @extends {React.PureComponent}
 */
class RSSFeedViewerResults extends React.PureComponent {
  render() {
    const feedItems = this.props.feedData.items.map((item, i) =>
      <FeedItemCard { ...item } key={ item.title } initiallyExpanded={ i === 0 }/>
    );

    const paperStyle = {
      padding: '20px',
      marginTop: '15px',
      display: 'flex',
      flexDirection: 'column',
    };

    return (
      <Paper style={paperStyle} zDepth={3}>
        <FeedHeaderCard { ...this.props.feedData.feed } />
        { feedItems }
      </Paper>
    );
  }
}

RSSFeedViewerResults.propTypes = {
  feedData: React.PropTypes.shape({
    feed: React.PropTypes.object.isRequired,
    items: React.PropTypes.array,
  }),
};

export default RSSFeedViewerResults;
