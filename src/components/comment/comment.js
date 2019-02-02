import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createCommentSelector} from '../../selectors';

export const TypeComment = PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
})

class Comment extends Component {
    render() {
        const { user, text } = this.props.comment
        return (
            <div>
                <h4>{user}</h4>
                <p>{text}</p>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: TypeComment,
    id: PropTypes.string.isRequired
}

const initMapStateToProps = () => {
    const commentSelector = createCommentSelector()
    return (store, ownProps) => {

        return {
            comment: commentSelector(store, ownProps)
        }
    }
}

export default connect(
    initMapStateToProps
)(Comment)
