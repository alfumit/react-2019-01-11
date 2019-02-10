import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import CommentsPaginator from '../components/comments-paginator/comments-paginator'

class CommentsPage extends Component {
    render() {
        return (
          <Route path='/comments/:page' render={this.paginator} />
        )
    }
    
    paginator({match}) {
      return (
        <div>
          <CommentsPaginator page={match.params.page}/>
        </div>
      )
    }
}

export default CommentsPage
