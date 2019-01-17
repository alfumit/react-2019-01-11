// HOC - higher order component
import React, { Component, Fragment } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      open: false
    }
    toggleOpen = () => {
      this.setState({ open: !this.state.open })
    }

    render() {
      return (
        <Fragment>
          <button onClick={this.toggleOpen}>
            {this.state.open ? 'Hide' : 'Show'} Comments
          </button>
          {this.state.open && (
            <OriginalComponent {...this.props} {...this.state} />
          )}
        </Fragment>
      )
    }
  }
