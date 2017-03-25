import React from 'react';
import TextField from 'material-ui/TextField';

/**
 * Simple pure react component for inputting a RSS feed url
 * @export
 * @class RSSInputBar
 * @extends {React.PureComponent}
 */
class RSSInputBar extends React.PureComponent {
  render() {
    return (
      <TextField
        hintText="http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
        fullWidth
        onChange={this.props.onChange}
        errorText={this.props.errorText}
      />
    );
  }
}

RSSInputBar.propTypes = {
  onChange: React.PropTypes.func,
  errorText: React.PropTypes.string,
};

export default RSSInputBar;
