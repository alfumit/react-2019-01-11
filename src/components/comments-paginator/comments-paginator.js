import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../comment/comment'
import { loadPageComments } from '../../ac'

class CommentsPaginator extends Component {
  componentDidMount() {
    this.props.loadPageComments(this.props.page)
  }
  
  render() {
    return (
      <div>Ay Paginator {this.props.page}</div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    page: ownProps.page
  }),
  { loadPageComments }
)(CommentsPaginator);
