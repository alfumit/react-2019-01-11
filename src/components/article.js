import React, { PureComponent } from 'react'
import CommentsList from './CommentsList'

class Article extends PureComponent {
  render() {
    const {
      article: { title, comments },
      isOpen
    } = this.props
    return (
      <div>
        <h3>
          {title}
          <button onClick={this.toggleOpen}>{isOpen ? 'close' : 'open'}</button>
        </h3>
        {this.body}
        <hr />
        <CommentsList comments={comments} />
      </div>
    )
  }

  toggleOpen = () => {
    this.props.toggleArticle(this.props.article.id)
  }

  get body() {
    if (!this.props.isOpen) return null
    return <p>{this.props.article.text}</p>
  }
}

export default Article
