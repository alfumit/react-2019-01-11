import {normalizedArticles} from '../fixtures';
import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'

const articlesObj = normalizedArticles.reduce((acc, item) => ({ ...acc, [item.id]: item}), {})

export default (articles = articlesObj, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
      case ADD_COMMENT:
        const article = articles[action.articleId]
        const comments = article.comments || []
        
          return {
            ...articles,
            [action.articleId]: {
              ...article,
              comments: [...comments, action.randomId]
            }
          }
          
        default:
            return articles
    }
}
