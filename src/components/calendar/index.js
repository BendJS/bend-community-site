import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import fakeEvents from './fakeEvents';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';

const localizer = momentLocalizer(moment)

const TAOCalendar = props => (
    <div className="calendar-container">
        <Calendar
            localizer={localizer}
            events={fakeEvents}
            startAccessor="start"
            endAccessor="end"
        />
    </div>
)

export default TAOCalendar;