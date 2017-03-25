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
    const { onChange, errorText, defaultValue } = this.props;
    return (
      <TextField
        id="rss-input-bar"
        defaultValue={defaultValue}
        fullWidth
        onChange={onChange}
        errorText={errorText}
      />
    );
  }
}

RSSInputBar.propTypes = {
  onChange: React.PropTypes.func,
  errorText: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
};

export default RSSInputBar;
