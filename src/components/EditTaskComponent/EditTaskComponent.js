import React, { useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { TaskContext } from '../../context/TaskContext'
import { FormViewComponent } from '../FormViewComponent/FormViewComponent'

export const EditTaskComponent = () => {
  const { setTasks, tasks } = useContext(TaskContext)
  const [task, setTask] = useState('')
  const history = useHistory()
  const { id } = useParams()

  const taskId = parseInt(id)

  const [currentTask] = tasks.filter(task => task.id === taskId)

  console.log(currentTask)

  const handleOnChange = (e) => {
    const { value } = e.currentTarget
    setTask(value)
  }


  const handleOnCancel = (e) => {
    e.preventDefault()
    history.replace('/')
  }

  const handleOnSave = (e) => {
    e.preventDefault()
    const taskEdited = {
      id: currentTask.id,
      task: task
    }
    const newTasks = tasks.map(taskInArray => taskInArray.id === taskId ? taskEdited : taskInArray)
    setTasks(newTasks)

    history.replace('/')
  }

  useEffect(() => {
    setTask(currentTask.task)
  }, [])

  return (
    <div className='container'>
      <div className='row-cols-9'>
        <h2>Edit task</h2>
        <FormViewComponent
          value={task}
          handleOnChange={handleOnChange}
          handleOnSave={handleOnSave}
          handleOnCancel={handleOnCancel} />
      </div>
    </div>
  )
}
