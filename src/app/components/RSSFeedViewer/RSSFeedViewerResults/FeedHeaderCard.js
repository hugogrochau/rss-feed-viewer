import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

/**
 * Displays a RSS feed's source information
 * @class FeedHeaderCard
 * @extends {React.PureComponent}
 */
class FeedHeaderCard extends React.PureComponent {
  render() {
    const { link, title, description } = this.props;
    const linkUrl = new URL(link);
    const image = `http://${linkUrl.hostname}/favicon.ico`;

    const SubtitleLink = <a href={link}>{link}</a>;

    return (
      <Card>
        <CardHeader
          avatar={image}
          title={title}
          subtitle={SubtitleLink}
        />
        <CardText>
          {description}
        </CardText>
      </Card>
    );
  }
}

FeedHeaderCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
};

export default FeedHeaderCard;
