import React from 'react'

export const TaskView = ({ task, handleOnEdit, handleOnDelete, isDone, doneStyle }) => {
  return (
    <div className="card" style={{ width: '18rem', marginTop: '30px', textDecoration: `${doneStyle}` }}>
      <div className="card-body">
        <h5 className="card-title" onClick={isDone} style={{ cursor: 'pointer' }} >{task.task}</h5>
        <button type="submit" className="btn btn-success mr-2" onClick={() => handleOnEdit(task.id)}>Edit</button>
        <button type="submit" className="btn btn-danger " onClick={() => handleOnDelete(task.id)}>Delete</button>
      </div>
    </div>
  )
}
