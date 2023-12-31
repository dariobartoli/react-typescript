import '../assets/styles/styles.css'

type Props = {
    task: string,
    deleteTask: () => void
}

const Task = ({task, deleteTask}: Props) => {
  return (
    <div className='task'>
        <div>{task}</div>
        <button onClick={deleteTask}>Borrar</button>
    </div>
  )
}

export default Task