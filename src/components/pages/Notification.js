import React from 'react';
import './Notification.css';

const Notification = ({ type, message }) => {
  return (
    <div className={`notification ${type}`}>
      <span className="icon">{type === 'success' ? '✔' : '⚠'}</span>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
