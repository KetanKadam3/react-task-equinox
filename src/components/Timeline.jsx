import React from 'react';
import './Timeline.css';
import { timelineData } from '../data/dummyData';

const Timeline = () => {
  return (
    <div className="timeline-wrapper">
      {timelineData.map((entry, idx) => (
        <div key={idx}>
          <div className="timeline-date">{entry.date}</div>
          <div className="timeline-box">
            {entry.activities.map((activity, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-left">
                  <p className="stage">{activity.stage}</p>
                  <p className="time">{activity.time}</p>
                </div>
                <div className="timeline-center">
                  <div className="dot"></div>
                  <div className="line"></div>
                </div>
                <div className="timeline-right">
                  <p className="status">{activity.status}</p>
                  <p className="desc">{activity.comment}</p>
                  <p className="followup">Follow Up : {activity.followUp}</p>
                  <p className="by">- {activity.by}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
