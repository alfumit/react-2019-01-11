import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, START, FAIL, LOAD_PAGE_COMMENTS} from '../constants'
import { arrToMap } from './utils'
import {OrderedMap, Map, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerRecord = Record({
    entities: new OrderedMap({}),
    pagination: new Map({}),
    loading: false,
    loaded: false,
    total: null,
})

export default (state = new ReducerRecord(), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(
                ['entities', randomId],
                new CommentRecord({...payload.comment, id: randomId})
            )
        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))
        case LOAD_PAGE_COMMENTS + START:
            return state.set('loading', true);
        case LOAD_PAGE_COMMENTS + SUCCESS:
            return state
                    .set('loading', false)
                    .set('loaded', true)
                    .set('total', response.total)
                    .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
                    .setIn(
                      ['pagination', payload.page, 'ids'],
                      response.records.map((comment) => comment.id)
                    )
                    .setIn(['pagination', payload.page, 'loading'], false)
        case LOAD_PAGE_COMMENTS + FAIL:
            return state
                .set('loading', false)
                .set('loaded', false)
        default:
            return state
    }
}
