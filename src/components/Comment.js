import React from 'react'

export default (Comment = ({ user, text }) => (
  <div style={{ margin: '5px auto' }}>
    <div>
      <span style={{ fontWeight: 'bold' }}> User:</span> {user}
    </div>
    <div>
      <span style={{ fontWeight: 'bold' }}> Comment:</span>: {text}
    </div>
  </div>
))
