import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
	  const [tasks, setTasks] = useState([]);

	  useEffect(() => {
		  // Replace with your backend API URL (e.g., http://localhost:5000)
		  axios.get('http://localhost:5000/api/tasks')
		        .then(response => setTasks(response.data))
		        .catch(error => console.error('Error fetching tasks:', error));
		    }, []);

	  return (
		      <div>
		        <h2>Task List</h2>
		        <ul>
		          {tasks.map((task) => (
				            <li key={task._id}>{task.title}</li>
				          ))}
		        </ul>
		      </div>
		    );
};

export default TaskList;
