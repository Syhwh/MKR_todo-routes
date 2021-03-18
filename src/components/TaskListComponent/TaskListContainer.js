import React from 'react'
import { TaskContainer } from '../TaskComponent/TaskContainer'

export const TaskListContainer = ({ todoList }) => {

  return (
    <div>
      {todoList.map((task) => <TaskContainer key={task.id} value={task} />)}
    </div>
  )
}
