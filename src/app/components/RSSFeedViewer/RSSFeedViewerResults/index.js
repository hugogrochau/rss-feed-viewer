import React from 'react';
import { GridList } from 'material-ui/GridList';
import FeedHeaderCard from './FeedHeaderCard';
import FeedItemCard from './FeedItemCard';

/**
 * Passes the feed data to the FeedItemCard and FeedHeaderCard components
 * @class RSSFeedViewerResults
 * @extends {React.PureComponent}
 */
class RSSFeedViewerResults extends React.PureComponent {
  render() {
    const feedItems = this.props.feedData.items.map((item) =>
        <FeedItemCard { ...item } key={ item.title }/>
    );

    return (
      <div>
        <FeedHeaderCard { ...this.props.feedData.feed } />
        <GridList>
          { feedItems }
        </GridList>
      </div>
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
