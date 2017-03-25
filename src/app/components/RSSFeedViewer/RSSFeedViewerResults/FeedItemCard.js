import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import sanitizeHtml from 'sanitize-html';
import isURL from 'validator/lib/isURL';

/**
 * Displays an individual item inside a RSS feed
 * @class FeedItemCard
 * @extends {React.PureComponent}
 */
class FeedItemCard extends React.PureComponent {
  render() {
    const { title, link, description, pubDate, initiallyExpanded } = this.props;
    const linkUrl = new URL(link);
    let image = this.props.image || this.props.thumbnail;
    if (!image || !isURL(image)) {
      image = `http://${linkUrl.hostname}/favicon.ico`;
    }
    const Subtitle =
      (<div>
        <div>
          <span>{pubDate}</span>
        </div>
        <a href={link}>{link}</a>;
      </div>);

    return (
      <Card
        initiallyExpanded={initiallyExpanded}
      >
        <CardHeader
          avatar={image}
          title={title}
          subtitle={Subtitle}
          showExpandableButton
          actAsExpander
        />
        <CardText
          expandable
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(description) }} />
      </Card>
    );
  }
}

FeedItemCard.propTypes = {
  description: React.PropTypes.string.isRequired,
  image: React.PropTypes.string,
  initiallyExpanded: React.PropTypes.bool,
  link: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  pubDate: React.PropTypes.string,
  thumbnail: React.PropTypes.string,
};

export default FeedItemCard;
