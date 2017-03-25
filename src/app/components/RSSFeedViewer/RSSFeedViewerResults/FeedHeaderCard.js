import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

/**
 * Displays a RSS feed's source information
 * @class FeedHeaderCard
 * @extends {React.PureComponent}
 */
class FeedHeaderCard extends React.PureComponent {
  render() {
    const { link, title, description } = this.props;
    const linkUrl = new URL(link);
    const image = this.props.image || `http://${linkUrl.hostname}/favicon.ico`;

    const SubtitleLink = <a href={link}>{link}</a>;

    const cardContainerStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    };

    const cardInfoStyle = { width: '500px' };

    const cardImageStyle = { maxWidth: '500px' };

    return (
      <Card>
        <div style={cardContainerStyle}>
          <div style={cardInfoStyle}>
            <CardTitle
              title={title}
              subtitle={SubtitleLink}
            />
            <CardText>
              {description}
            </CardText>
          </div>
          <div>
            <img src={image} style={cardImageStyle} />
          </div>
        </div>
      </Card>
    );
  }
}

FeedHeaderCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  image: React.PropTypes.string,
};

export default FeedHeaderCard;
