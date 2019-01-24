import {UPDATE_DATEPICKER, UPDATE_SELECT, RESET_DATEPICKER} from "../constants";
const initialState = {
	datepicker: {
		from: undefined,
		to: undefined,
		numberOfMonths: 2
	},
	select: {
		selectedOption: []
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_DATEPICKER:
			state = {
				...state,
				datepicker: {
					from: action.payload.from,
					to: action.payload.to,
					numberOfMonths: state.datepicker.numberOfMonths
				}
			};
			break;

		case RESET_DATEPICKER:
			state = {
				...state,
				datepicker: initialState.datepicker
			};
			break;
		case UPDATE_SELECT:
			state = {
				...state,
				select: {
					selectedOption: action.payload
				}
			};
			break;
	}
	return state;

}
