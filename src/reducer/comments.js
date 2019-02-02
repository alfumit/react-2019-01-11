import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, FAIL, START } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null,
    loading: false,
})


const ReducerState = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false,
    error: null
})


export default (state = new ReducerState(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.entities.set(randomId, {...payload.comment, id: randomId})
        case LOAD_ARTICLE_COMMENTS + START:
            return state.set('loading', true);
        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state
                .set('entities', arrToMap(payload.records, CommentRecord))
                .set('loading', false)
                .set('loaded', true)
        case LOAD_ARTICLE_COMMENTS + FAIL:
            return state
                .set('loading', false)
                .set('loaded', false);
        default:
            return state
    }
}
