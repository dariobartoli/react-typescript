import Task from "./Task"
import '../assets/styles/styles.css'


type Props = {
    listTask: string[],
    deleteTask: (index:number) => void
}

const ListTask = ({listTask, deleteTask}: Props) => {
  return (
    <div className="task__list">
        {listTask.map((task, index) => (
            <Task key={index} task={task} deleteTask={()=> deleteTask(index)}></Task>
        ))}
    </div>
  )
}

export default ListTask