import React, {useState} from 'react'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import {DateRangePicker} from 'react-dates'

const date = () => {
  const [state, setState] = useState({
    startDate:null,
    endDate:null,
    focusedInput:null
  })
  return (
    <div>
      <DateRangePicker
        startDateId="startDate"
        endDateId="endDate"
        startDate={state.starteDate}
        endDate={state.endDate}
        onDatesChange={({starteDate, endDate}) => {setState({starteDate, endDate})}}
        focusedInput={state.focusedInput}
        onFocusChange={(focusedInput) => {setState(focusedInput)}}
      />
    </div>
  )
}

export default date
