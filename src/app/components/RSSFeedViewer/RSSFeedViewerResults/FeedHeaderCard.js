import React from 'react';
import { Card, CardTitle, CardText, CardContent } from 'material-ui/Card';

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

    const cardContainerStyle = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' };

    const imageStyle = { height: '300px', maxWidth: '50%' };

    return (
      <Card>
        <div style={cardContainerStyle}>
          <div>
            <CardTitle
              title={title}
              subtitle={SubtitleLink}
            />
            <CardText>
              {description}
            </CardText>
          </div>
          <img style={imageStyle} src={image} />
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
