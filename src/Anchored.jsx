import React from 'react'
import PropTypes from 'prop-types'

export const Anchored = ({anchor, children}) => {
  return(
    <div id={`#${anchor}`}>{children}</div>
  );
};

Anchored.propTypes = {
  anchor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Anchored;