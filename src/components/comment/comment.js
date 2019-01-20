import React from 'react'
import PropTypes from 'prop-types'
import './comment.css'

function Comment(props) {
  const { user, text } = props.comment
  return (
    <div className="test--comments-body">
      <h4>{user}</h4>
      <p>{text}</p>
    </div>
  )
}

Comment.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string
}

export default Comment
