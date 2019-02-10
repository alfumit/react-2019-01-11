import React, { Component } from 'react';
import ArticlesPage from './routes/articles';
import CommentsPage from './routes/comments';
import UserForm from './components/user-form/user-form';
import Filters from './components/filters';
import Counter from './components/counter';
import {Route, NavLink, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <UserForm/>
                <div>
                    <NavLink to={'/counter'} activeStyle={{color: 'red'}}>Counter</NavLink>
                </div>
                <div>
                    <NavLink to={'/filters'} activeStyle={{color: 'red'}}>Filters</NavLink>
                </div>
                <div>
                    <NavLink to={'/articles'} activeStyle={{color: 'red'}}>Articles</NavLink>
                </div>
                <div>
                  <NavLink to={'/comments/1'} activeStyle={{color: 'red'}}>Comments</NavLink>
                </div>
                <Switch>
                    <Route path={"/counter"} component={Counter} exact />
                    <Route path={"/filters"} component={Filters}/>
                    <Route path={"/articles/new"} render={() => <h1>New article form</h1>}/>
                    <Route path={"/articles"} component={ArticlesPage}/>
                    <Route path={"/comments"} component={CommentsPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
