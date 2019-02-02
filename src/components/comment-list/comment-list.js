import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../comment/comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './comment-list.css'
import CommentForm from '../comment-form'
import { loadArticleComments } from '../../ac'

export const TypeComments = PropTypes.arrayOf(PropTypes.string)

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,

    // from decorator
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func.isRequired
  }

  static defaultProps = {
    comments: []
  }

  render() {
    const { isOpen, toggleOpenItem, article } = this.props
    return (
      <div>
        <button
          onClick={() => {
            toggleOpenItem()
            this.props.loadArticleComments()
          }}
          className="test--comment-list__btn"
        >
          {isOpen ? 'hide comments' : 'show comments'}
        </button>
        <CSSTransition
          transitionName="comment-list"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  get body() {
    const {
      article: { comments = [], id: articleId },
      isOpen
    } = this.props

    if (!isOpen) return null

    const body = comments.length && this.props.loaded ? (
      <ul>
        {comments.map((id) => (
          <li key={id} className="test--comment-list__item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="test--comment-list__empty">No comments yet</h3>
    )

    return (
      <div>
        <CommentForm articleId={articleId} />
        {body}
        {this.props.loading && (
          <h3>Still loading comments, don't go away</h3>
        )}
      </div>
    )
  }
}

export default connect(
  store => {
    return {
      loading: store.comments.loading,
      loaded: store.comments.loaded
    }
  },
  {
    loadArticleComments: loadArticleComments
  }
)(toggleOpen(CommentList))
