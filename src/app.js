import React, { Component } from 'react';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';
import Filters from './components/filters';
import PropTypes from 'prop-types'

class App extends Component {

    render() {
        const {articles} = this.props;
        return (
            <div>
                <UserForm/>
                <Filters articles={articles} />
                <ArticleList articles={articles}/>
            </div>
        );
    }
}

App.propTypes = {
  articles: PropTypes.array
}

export default App;
