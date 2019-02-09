import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment } from '../../ac'
import { Consumer as TranslationConsumer } from '../../contexts/translation'

class Counter extends Component {
  render() {
    return (
      <TranslationConsumer>
        {(context) => (
          <div>
            <h2>{this.props.countProp}</h2>
            <button onClick={this.handleIncrement}>{context.counter.increment}</button>
          </div>
        )}
      </TranslationConsumer>
    )
  }

  handleIncrement = () => {
    this.props.dispatchIncrement()
  }
}

const mapStateToProps = (store) => ({
  countProp: store.count
})

const mapDispatchToProps = {
  dispatchIncrement: increment
}
// const mapDispatchToProps = (dispatch) => ({
//     dispatchIncrement: () => dispatch(increment())
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
