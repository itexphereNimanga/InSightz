import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Schedule.css';
import axios from 'axios';
import { useUser } from '../../UserContext';

function ContentScheduler() {
  const [contentList, setContentList] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    dateTime: new Date(),
    description: ''
  });
  const { user } = useUser();

  useEffect(() => {
    axios.get('http://localhost:5000/api/content')
      .then(response => {
        setContentList(response.data);
      })
      .catch(error => {
        console.error('Error fetching content:', error);
        alert('Failed to fetch content. Please check your connection.');
      });
  }, []);

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Add the 'content' field required by the backend
    const completeFormData = {
      title: formData.title,
      dateTime: formData.dateTime.toISOString(),
      content: formData.description, // Here 'content' maps to 'description'
      username: user.userName // Assuming your backend expects a username
    };

    axios.post('http://localhost:5000/api/content', completeFormData)
      .then(response => {
        console.log('Content scheduled successfully:', response.data);
        console.log('Response:', completeFormData);
        setContentList([...contentList, response.data]);
        setFormData({ title: '', dateTime: new Date(), description: '' }); // Reset form
        alert('Content has been successfully scheduled.');
      })
      .catch(error => {
        console.error('Failed to schedule content:', error);
        alert('Failed to schedule content. Please try again.');
        if (error.response) {
          console.log('Response data:', error.response.data);
          console.log('Status:', error.response.status);
        }
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/content/${id}`)
      .then(() => {
        setContentList(contentList.filter(item => item._id !== id));
        alert('Content deleted successfully.');
      })
      .catch(error => {
        console.error('Failed to delete content:', error);
        alert('Failed to delete content. Please try again.');
      });
  };

  return (
    <div className="scheduler-container">
      <form onSubmit={handleSubmit} className="content-form">
        <input
          type="text"
          name="title"
          placeholder="Content Title"
          value={formData.title}
          onChange={e => handleChange(e.target.name, e.target.value)}
          className="input-field"
        />
        <DatePicker
          selected={formData.dateTime}
          onChange={date => handleChange('dateTime', date)}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          className="date-picker"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={e => handleChange(e.target.name, e.target.value)}
          className="textarea-field"
        />
        <button type="submit" className="submit-button">Schedule Content</button>
      </form>
      <div className="content-list">
        {contentList.map((item, index) => (
          <div key={index} className="content-item">
            <h4>{item.title}</h4>
            <p>{new Date(item.dateTime).toLocaleString()}</p>
            <p>{item.content}</p>  {/* Displaying 'content' instead of 'description' */}
            <button onClick={() => handleDelete(item._id)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentScheduler;
