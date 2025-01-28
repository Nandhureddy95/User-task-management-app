import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Import Components


import Home from './components/Home';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
	  return (
		      <Router>
		        <div className="App">
		          <header>
		            <h1>Task Manager</h1>
		          </header>

		          <main>
		            <Switch>
		              <Route path="/" exact component={Home} />
		              <Route path="/tasks" component={TaskList} />
		              <Route path="/add-task" component={AddTask} />
		            </Switch>
		          </main>
		        </div>
		      </Router>
		    );
};

export default App;
