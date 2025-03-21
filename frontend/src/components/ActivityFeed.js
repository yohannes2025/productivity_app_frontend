import React, { useState, useEffect } from "react";
import axios from "axios";

function ActivityFeed() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get("/api/activities/");
        setActivities(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchActivities();
  }, []);

  return (
    <div>
      <h2>Activity Feed</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <strong>{activity.user.name}</strong> {activity.action} a task:{" "}
            {activity.task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityFeed;
