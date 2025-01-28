import React, { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
	  const [title, setTitle] = useState('');
	  const [description, setDescription] = useState('');

	  const handleSubmit = (e) => {
		      e.preventDefault();
		      const newTask = { title, description };
		      // Replace with your backend API URL (e.g., http://localhost:5000)
		 axios.post('http://localhost:5000/api/tasks', newTask)
		        .then(response => {
				        console.log('Task added:', response.data);
				        setTitle('');
				        setDescription('');
				      })
		        .catch(error => console.error('Error adding task:', error));
		    };

	  return (
		      <div>
		        <h2>Add New Task</h2>
		        <form onSubmit={handleSubmit}>
		          <div>
		            <label>Title:</label>
		            <input
		              type="text"
		              value={title}
		              onChange={(e) => setTitle(e.target.value)}
		              required
		            />
		          </div>
		          <div>
		            <label>Description:</label>
		            <textarea
		              value={description}
		              onChange={(e) => setDescription(e.target.value)}
		              required
		            />
		          </div>
		          <button type="submit">Add Task</button>
		        </form>
		      </div>
		    );
};

export default AddTask;
