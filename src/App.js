import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [time, setTime] = useState('');
  const [text, setText] = useState('');

  const addTask = () => {
    if (time && text) {
      const newTask = { id: Date.now(), time, text };
      setTasks([...tasks, newTask]);
      setTime('');
      setText('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h1>🗓 Daily Planner</h1>

      <div className="form">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 && <p>No tasks yet.</p>}
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <span className="time">{task.time}</span>
            <span className="text">{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
