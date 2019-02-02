import React, {Component} from 'react'

class UserForm extends Component {
    state = {
        user: ''
    }

    render() {
        return (
            <div>
                Username:
                <input value={this.state.user} onChange={this.handleChange}/>
            </div>
        )
    }

    handleChange = (event) => {
        event.preventDefault()

        if (event.target.value.length > 10) {
            return this.setState({
                user: ''
            })
        }

        this.setState({
            user: event.target.value
        })
    }
}

export default UserForm
