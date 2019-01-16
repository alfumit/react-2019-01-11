import React, { Component } from 'react'
import ReactDatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export default class DatePicker extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date()
  }

  handleChangeStart = (startDate) => this.setState({ startDate });
  handleChangeEnd = (endDate) => this.setState({ endDate });


  render() {
    return (
      <React.Fragment>
        <ReactDatePicker
          dropdownMode={'select'}
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart}
        />
        <ReactDatePicker
          dropdownMode={'select'}
          selected={this.state.endDate}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd}
        />
      </React.Fragment>
    )
  }
}
