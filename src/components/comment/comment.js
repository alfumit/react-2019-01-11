import React from 'react'
import PropTypes from 'prop-types';

export const TypeComment = PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
})

function Comment(props) {
    const { user, text } = props.comment
    return (
        <div>
            <h4>{user}</h4>
            <p>{text}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: TypeComment
}

export default Comment
