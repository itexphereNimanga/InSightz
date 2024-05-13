import React from "react";
import Notification from "./Notification";
import "./Alerts.css";

const Alerts = () => {
  return (
    <div className="alerts-container">
      <Notification type="success" message="It's a great time to post! 🚀" />
      <Notification type="warning" message="New trends are emerging! 📈" />
      <Notification type="success" message="It's a great time to post! 🚀" />
      <Notification type="warning" message="New trends are emerging! 📈" />
      <Notification type="success" message="It's a great time to post! 🚀" />
      <Notification type="warning" message="New trends are emerging! 📈" />
    </div>
  );
};

export default Alerts;
