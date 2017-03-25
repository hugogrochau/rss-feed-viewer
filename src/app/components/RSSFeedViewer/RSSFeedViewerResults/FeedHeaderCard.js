import React from 'react';

/**
 * Displays a RSS feed's source information
 * @class FeedHeaderCard
 * @extends {React.PureComponent}
 */
class FeedHeaderCard extends React.PureComponent {
  render() {
    const { title, link, author, description } = this.props;
    const linkUrl = new URL(link);
    const image = this.props.image || `${linkUrl.hostname}/favicon.ico`;

    return (
      <div>
        <ul>
          <li>{title}</li>
          <li>{link}</li>
          <li>{author}</li>
          <li>{description}</li>
          <li>{image}</li>
        </ul>
      </div>
    );
  }
}

FeedHeaderCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  author: React.PropTypes.string,
  description: React.PropTypes.string,
  image: React.PropTypes.string,
};

export default FeedHeaderCard;
