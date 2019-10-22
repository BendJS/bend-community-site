import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import fakeEvents from './fakeEvents';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';

const resourceMap = [
    { resourceId: 1, resourceTitle: 'Board room' },
    { resourceId: 2, resourceTitle: 'Training room' },
    { resourceId: 3, resourceTitle: 'Meeting room 1' },
    { resourceId: 4, resourceTitle: 'Meeting room 2' },
]

const localizer = momentLocalizer(moment)

const selectEvent = (event) => {
    console.log(`selected event: `, event);
}

const TAOCalendar = () => (
    <div className="calendar-container">
        <Calendar
            localizer={localizer}
            events={fakeEvents}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={selectEvent}
            resources={resourceMap}
            resourceIdAccessor="resourceId"
            resourceTitleAccessor="resourceTitle"
            eventPropGetter={event => ({
                className: event.class
            })}
        />
    </div>
)

export default TAOCalendar;