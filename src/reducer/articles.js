import articlesMock from '../fixtures';
import {DELETE_ARTICLE} from '../constants';

export default (articles = articlesMock, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
            break;
        default:
            return articles
    }
}