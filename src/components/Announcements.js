import React from "react";
import PropTypes from "prop-types";

class Announcements extends React.Component {
  render() {
    return (
      <div
        className="visuallyhidden"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {this.props.message}
      </div>
    );
  }
}

Announcements.PropTypes = {
  message: PropTypes.string.isRequired
};

export default Announcements;
