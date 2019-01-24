import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { updateSelect } from '../../ac/index'

class SelectFilter extends Component {
  render() {
    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={this.props.selectedOption}
        isMulti
      />
    )
  }

  get optionsForSelect() {
    return this.props.articles.map((item) => ({
      value: item.id,
      label: item.title
    }))
  }

  handleSelectChange = (e) => {
    this.props.updateSelect(e)
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
  selectedOption: state.filters.select.selectedOption
});

const mapDispatchToProps = (dispatch) => ({
  updateSelect: (selectedOption) => dispatch(updateSelect(selectedOption))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
