import React from 'react';
import { GridTile } from 'material-ui/GridList';

/**
 * Displays an individual item inside a RSS feed
 * @class FeedItemCard
 * @extends {React.PureComponent}
 */
class FeedItemCard extends React.PureComponent {
  render() {
    const { title, link, description, author, pubDate, categories } = this.props;
    const image = this.props.image || this.props.thumbnail;

    return (
      <GridTile>
        <ul>
          <li>{title}</li>
          <li>{description}</li>
          <li>{link}</li>
          <li>{author}</li>
          <li>{description}</li>
          <li>{image}</li>
          <li>{pubDate}</li>
          <li>{categories}</li>
        </ul>
      </GridTile>
    );
  }
}

FeedItemCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  author: React.PropTypes.string,
  pubDate: React.PropTypes.string,
  thumbnail: React.PropTypes.string,
  image: React.PropTypes.string,
  categories: React.PropTypes.array,
};

export default FeedItemCard;
