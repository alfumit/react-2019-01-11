import {INCREMENT, DELETE_ARTICLE, UPDATE_SELECT, UPDATE_DATEPICKER, RESET_DATEPICKER} from '../constants';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const updateSelect = (selectedOption) => ({
	type: UPDATE_SELECT,
	payload: selectedOption
})

export const updateDatepicker = (value) => ({
	type: UPDATE_DATEPICKER,
	payload: value
})

export const resetDatepicker = () => ({
	type: RESET_DATEPICKER
})

