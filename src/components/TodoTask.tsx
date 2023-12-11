import { useState } from 'react'
import ListTask from './ListTask'

const TodoTask = () => {
    const [task, setTask] = useState<string>('')
    const [listTask, setListTask] = useState<string[]>([])


    const handleAddTask = ()=>{
        if(task.trim() === '') return
        setListTask(tasks => [...tasks, task])
        setTask('')
    }
    const handleDeleteTask = (index: number)=>{
        setListTask(tasks =>  tasks.filter((_,i) => i !== index)) // usamos el _ para que no aplique, y filtramos solo por el indice
    }
  return (
    <div className='main'>
        <h1>Lista de Tareas</h1>
        <div className='form'>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Nueva tarea"/>
            <button onClick={handleAddTask}>Añadir Tarea</button>
        </div>
        <ListTask listTask={listTask} deleteTask={handleDeleteTask}></ListTask>
    </div>
  )
}

export default TodoTask