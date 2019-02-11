import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../comment/comment'
import { loadPageComments } from '../../ac'
import { totalCommentsSelector, commentsPageLoadingSelector, commentsPageIdsSelector } from '../../selectors'

class CommentsPaginator extends Component {
  componentDidMount() {
    this.props.loadPageComments(this.props.page)
  }
  
  render() {
    return (
      <div>
        <h1>Ay Paginator {this.props.page}</h1>
        {this.props.loaded &&
        <ul>
          {this.props.comments.map((id) => {
            return (<li key={id}>
              <Comment id={id}/>
            </li>)
          })}
        </ul>
        }
      </div>
    )
  }
}

export default connect(
  (state, props) => ({
    page: props.page,
    comments: commentsPageIdsSelector(state, props),
    loaded: state.comments.loaded,
    loading: commentsPageLoadingSelector(state, props),
    total: totalCommentsSelector(state)
  }),
  { loadPageComments }
)(CommentsPaginator);
