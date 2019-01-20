import React from 'react'
import './comment.css'

function Comment(props) {
    const { user, text } = props.comment
    return (
        <div className='test--comments-body'>
            <h4>{user}</h4>
            <p>{text}</p>
        </div>
    )
}

export default Comment
