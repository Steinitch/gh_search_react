import React from "react"
import PropTypes from "prop-types"
class Searches extends React.Component {
  render () {
    return (
      <React.Fragment>
        Hello: {this.props.name}
      </React.Fragment>
    );
  }
}

Searches.propTypes = {
  name: PropTypes.string
};
export default Searches
