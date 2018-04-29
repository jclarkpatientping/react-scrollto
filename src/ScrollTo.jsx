import React from 'react'
import PropTypes from 'prop-types'

export const scrollToAnchor = (anchor) => window.location.hash = anchor;

export const ScrollTo = ({ anchor, children }) => (

  <div 
    data-test="ScrollToRoot"
    onClick={() => scrollToAnchor(anchor)} 
    id={`#${anchor}`}
  >
    {children}
  </div>

);

ScrollTo.propTypes = {
  anchor: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]).isRequired
}

export default ScrollTo;