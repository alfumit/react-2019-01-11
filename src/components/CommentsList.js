import React from 'react'
import Comment from './Comment'
import ShowToggle from '../decorators/ShowToggle'

const CommentsList = ({ comments, toggleOpen }) => (
  <div>
    {comments && comments.map((item) => <Comment {...item} key={item.id} />)}
  </div>
)

export default ShowToggle(CommentsList)
