import {normalizedComments} from '../fixtures';
import { ADD_COMMENT } from '../constants'


const defaultComments = normalizedComments.reduce((acc, comment) => {
    return {
        ...acc,
        [comment.id]: comment
    }
}, {})

export default (comments = defaultComments, action) => {
    const {type} = action
    switch (type) {
        case ADD_COMMENT:
            return {
                ...comments,
                [action.randomId]: {
                    ...action.payload,
                    id: action.randomId
                }
            }
        
        default:
            return comments
    }
}
