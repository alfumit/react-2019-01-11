import React, { Component } from 'react';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';
import Select from 'react-select';
import DatePicker from './components/Datepicker'

class App extends Component {
    state = {
        selected: null
    }
  render() {
    return (
      <div>
          <UserForm/>
	      <hr/>
          <Select
              options={this.options}
              value={this.state.selected}
              onChange={this.handleSelectChange}
              isMulti
          />
        <hr />
        <DatePicker />
        <hr />
          <ArticleList
              articles={this.props.articles}
          />
      </div>
    );
  }
    handleSelectChange = (selected) => this.setState({selected})
  get options() {
      return this.props.articles.map(article => ({
          value: article.id,
          label: article.title
      }))
  }
}

export default App;
