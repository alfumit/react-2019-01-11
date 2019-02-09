import React, {Component} from 'react'

class UserForm extends Component {
    render() {
        return (
            <div>
                Username:
                <input value={this.props.value} onChange={this.handleChange}/>
            </div>
        )
    }

    handleChange = (event) => {
        event.preventDefault()
        this.props.onChange(event.target.value)
    }
}

export default UserForm
