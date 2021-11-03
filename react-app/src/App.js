import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appoitment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 3:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 7th at 4:30pm',
        reminder: false,
    }
])

//Delete a task using FaTimes 'x' icon
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=> task.id !== id));
}

  return (
    <div className="container">
        <Header title='Task Tracker'/>
        {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : "No Tasks left"}
    </div>
  );
}

export default App;
