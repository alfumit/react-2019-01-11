import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Comment from '../comment/comment'
import { loadPageComments } from '../../ac'
import { totalCommentsSelector, commentsPageLoadingSelector, commentsPageIdsSelector } from '../../selectors'
import { COMMENTS_PER_PAGE } from '../../constants'

class CommentsPaginator extends Component {
  componentDidMount() {
    this.props.loadPageComments(this.props.page)
  }
  
  render() {
    const pages = [...Array(Math.ceil(this.props.total / COMMENTS_PER_PAGE)).keys()];
    return (
      <div>
        <h1>Paginator page {this.props.page}</h1>
        <ul>
          { pages.map(num => {
            const pageNum = num ++;
            return (
            <li key={pageNum} style={{listStyleType: 'none', display: 'inline-block', margin: '0 5px'}}>
              <a href={`/comments/${pageNum}`}>
                {pageNum}
              </a>
            </li>)} )}
        </ul>
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
