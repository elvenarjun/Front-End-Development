import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [showAddTask,setShowAddTask] = useState(false)
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
        text: 'suni',
        day: 'Feb 7th at 4:30pm',
        reminder: false,
    }
])

//Delete a task using FaTimes 'x' icon
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=> task.id !== id));
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? { ...task, reminder: !task.reminder} : task ));
}

const addTask = (task) => {
  const id = Math.floor(Math.random()*10000)+1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask]);
}

  return (
    <div className="container">
        <Header title='Task Tracker' onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
        {!showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length>0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : "No Tasks left"}
    </div>
  );
}

export default App;