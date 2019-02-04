import React, {PureComponent} from 'react'
import CommentList, {TypeComments} from '../comment-list/comment-list';
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'
import './article.css';
import {connect} from 'react-redux';
import {deleteArticle, loadArticle} from '../../ac';
import Loader from '../common/loader';

export const TypeArticle = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    comments: TypeComments
})

class Article extends PureComponent {
    state = {
        error: null
    }
    componentDidCatch(error) {
        this.setState({error})
    }
    componentDidUpdate(oldProps) {
        const {isOpen, loadArticle, article} = this.props
        if (!oldProps.isOpen && isOpen && !article.text) {
            loadArticle(article.id)
        }
    }
    render() {
        const {article: {title, loading, loaded}, isOpen} = this.props
        return (
            <div>
                <h3>
                    {title}
                    <button className="test--article__btn" onClick={this.toggleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <button onClick={this.handleDelete}>Delete</button>
                </h3>
                <CSSTransition
                    transitionName="article"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                    {loading && <Loader />}
	                {loaded && this.body}
                </CSSTransition>
            </div>
        )
    }

    handleDelete = () => {
        this.props.dispatchDeleteArticle(this.props.article.id)
    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    get body() {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return (
            <section className="test--article_body">
                <p>{article.text}</p>
                {
                    this.state.error ?
                        null :
                        <CommentList article={article} />
                }
            </section>
        )
    }
}

Article.propTypes = {
    isOpen: PropTypes.bool,
    toggleArticle: PropTypes.func,
    article: TypeArticle
}

export default connect(
    null,
    (dispatch) => ({
        dispatchDeleteArticle: (id) => dispatch(deleteArticle(id)),
        loadArticle: (id) => dispatch(loadArticle(id))
    })
)(Article)
