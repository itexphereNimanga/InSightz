import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Alerts.css'; // This is for the updated styling

function Notification() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        const fetchTimeAndContent = async () => {
            try {
                const timeResponse = await axios.get('http://worldtimeapi.org/api/timezone/Etc/UTC');
                const currentTime = new Date(timeResponse.data.datetime).getTime();

                const contentResponse = await axios.get('http://localhost:5000/api/content/today/spooky');
                const sortedContents = contentResponse.data.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
                setContents(sortedContents);

                sortedContents.forEach(content => {
                    let contentTime = new Date(content.dateTime).getTime();
                    let delay = contentTime - currentTime;
                    if (delay > 0) {
                        setTimeout(() => {
                            alert(`Time for: ${content.title} upload!`);
                        }, delay);
                    }
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTimeAndContent();
    }, []);

    return (
        <div className="notification-container">
            {contents.length > 0 ? (
                contents.map(content => (
                    <div key={content._id} className="notification-item">
                        <div className="content-header">
                            <h4>{content.title}</h4>
                            <span className="date-time">{new Date(content.dateTime).toLocaleString()}</span>
                        </div>
                        <p>{content.content}</p>
                    </div>
                ))
            ) : (
                <p className="no-content">No content for today.</p>
            )}
        </div>
    );
}

export default Notification;
