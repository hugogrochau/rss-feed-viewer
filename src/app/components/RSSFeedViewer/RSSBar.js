import React from 'react';
import TextField from 'material-ui/TextField';

/**
 * Simple pure react component for inputting a RSS feed url
 * @export
 * @class RSSBar
 * @extends {React.PureComponent}
 */
class RSSBar extends React.PureComponent {
  render() {
    return (
      <TextField
        hintText="http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
        fullWidth
        onChange={this.props.onChange}
      />
    );
  }
}

RSSBar.propTypes = {
  onChange: React.PropTypes.func,
};

export default RSSBar;
