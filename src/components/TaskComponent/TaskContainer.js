import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { TaskContext } from '../../context/TaskContext'
import { TaskView } from './TaskView'

export const TaskContainer = ({ value }) => {

  const { tasks, setTasks } = useContext(TaskContext)
  const history = useHistory()
  const [done, setDone] = useState(false)

  const handleOnDelete = (id) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const handleOnEdit = (id) => {
    history.push(`/edit/${id}`)
  }




  return (
    <TaskView
      task={value}
      handleOnDelete={handleOnDelete}
      handleOnEdit={handleOnEdit}
      isDone={() => setDone(!done)}
      doneStyle={done ? 'line-through red' : 'none'}
    />
  )
}
