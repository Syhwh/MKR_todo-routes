import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { TaskContext } from '../../context/TaskContext'
import { TaskListContainer } from '../TaskListComponent/TaskListContainer'

export const MainTaskComponent = () => {

  const { tasks } = useContext(TaskContext)
  const history = useHistory()

  return (
    <div className='container'>
      <h2>My tasks</h2>
      <div className='row'>

        <button className='btn btn-info' onClick={() => history.push('/add')}>Add new task</button>
      </div>
      <div className='row-cols-lg-6 mt-3'>

        <TaskListContainer todoList={tasks} />
      </div>
    </div>
  )
}
