import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import { ADD_COMMENT } from '../../constants'

class CommentForm extends Component {
  state = {
    user: '',
    text: ''
  }
  
  render() {
    return (
      <div>
        <form onSubmit={ this.handleSumbit }>
          <label>
            Username:
            <input type="text" value={this.state.user} onChange={ this.handleChange("user") } />
          </label>
          <label>
            Comment text:
            <input type="text" value={this.state.text} onChange = {this.handleChange("text")} />
          </label>
          <button type='Submit'>Submit</button>
        </form>
      </div>
    )
  }
  
  handleSumbit = (e) => {
          e.preventDefault();
          this.props.addComment(this.state);
          this.setState({
            user: '',
            text: ''
          })
  }
  
  handleChange = (type) => (e) => {
    const { value } = e.target;
    this.setState({[type]: value});
  }
}

export default connect(
  null,
  (dispatch, ownProps) => ({
    addComment: (comment) => dispatch({
      type: ADD_COMMENT,
      payload: comment,
      articleId: ownProps.articleId,
      generateId: true
    })
  })
)(CommentForm)
