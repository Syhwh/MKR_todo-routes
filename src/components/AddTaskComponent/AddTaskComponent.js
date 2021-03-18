import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import { TaskContext } from '../../context/TaskContext'
import { FormViewComponent } from '../FormViewComponent/FormViewComponent'

export const AddTaskComponent = () => {
  const [value, setValue] = useState('')
  const history = useHistory()

  const { setTasks, tasks } = useContext(TaskContext)


  const handleOnChange = (event) => {
    const { value } = event.currentTarget
    setValue(value)
  }

  const handleOnSave = (event) => {
    event.preventDefault()

    const task = {
      id: Date.now(),
      task: value
    }

    // array global
    setTasks([task, ...tasks])

    history.push('/')
  }
  const handleOnCancel = (event) => {
    event.preventDefault()
    history.replace('/')
  }

  return (
    <div className='container'>
      <div className='row-cols-9'>
        <h2>Add task</h2>
        <FormViewComponent
          value={value}
          handleOnChange={handleOnChange}
          handleOnSave={handleOnSave}
          handleOnCancel={handleOnCancel} />
      </div>
    </div>
  )
}
