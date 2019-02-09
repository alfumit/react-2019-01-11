import React, { Component } from 'react'
import { Consumer as TranslationConsumer } from '../../contexts/translation'

class UserForm extends Component {
  render() {
    return (
      <TranslationConsumer>
        {(context) => (
          <div>
            {context.userForm.userName}:
            <input value={this.props.value} onChange={this.handleChange} />
          </div>
        )}
      </TranslationConsumer>
    )
  }

  handleChange = (event) => {
    event.preventDefault()
    this.props.onChange(event.target.value)
  }
}

export default UserForm
