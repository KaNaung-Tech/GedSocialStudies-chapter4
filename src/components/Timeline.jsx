import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const events = [
  { date: 'July 4, 1776', title: 'Declaration of Independence', description: 'The United States declared independence from Britain.', icon: <SchoolIcon /> },
  { date: 'July 20, 1969', title: 'Moon Landing', description: 'Apollo 11 landed on the moon.', icon: <WorkIcon /> },
  // Add more events here
];

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div style={{ display: 'flex' }}>
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.date}
            icon={event.icon}
            onTimelineElementClick={() => setSelectedEvent(event)}
          >
            <h3>{event.title}</h3>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      {selectedEvent && (
        <div style={{ marginLeft: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h3>{selectedEvent.title}</h3>
          <p>{selectedEvent.date}</p>
          <p>{selectedEvent.description}</p>
        </div>
      )}
    </div>
  );
};

export default Timeline;
