import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { connect } from "react-redux";
import {updateDatepicker, resetDatepicker} from "../../ac";

class Example extends React.Component {
    static defaultProps = {

    };
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, {from: this.props.from, to: this.props.to});
	    this.props.updateDatepicker(range)
    }
    handleResetClick() {
        // this.setState(this.getInitialState());
	    this.props.resetDatepicker()
    }
    render() {
        const { from, to } = this.props;
        const modifiers = { start: from, end: to };
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
	from: state.filters.datepicker.from,
	to: state.filters.datepicker.to,
	numberOfMonths: state.filters.datepicker.numberOfMonths
})

const mapDispatchToProps = (dispatch) => ({
	updateDatepicker: (value) => dispatch(updateDatepicker(value)),
	resetDatepicker: (value) => dispatch(resetDatepicker()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Example)
