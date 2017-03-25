import React from 'react';

/**
 * Displays a RSS feed's source information
 * @class FeedHeaderCard
 * @extends {React.PureComponent}
 */
class FeedHeaderCard extends React.PureComponent {
  render() {
    const { url, title, link, author, description } = this.props;
    const image = this.props.image || `${url}/favicon.ico`;

    return (
      <div>
      <ul>
        <li>{url}</li>
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
  url: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string,
  author: React.PropTypes.string,
  description: React.PropTypes.string,
  image: React.PropTypes.string,
};

export default FeedHeaderCard;
