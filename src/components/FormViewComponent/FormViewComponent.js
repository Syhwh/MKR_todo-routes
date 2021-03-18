import React from 'react'

export const FormViewComponent = ({ handleOnChange, handleOnCancel, value, handleOnSave }) => {
  return (
    <form>
      <div className="mb-3">
        <input type="text" className="form-control" value={value} onChange={handleOnChange} />
        <div className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <button type="submit" className="btn btn-success" onClick={handleOnSave}>Save</button>
      <button type="submit" className="btn btn-danger" onClick={handleOnCancel}>Cancel</button>
    </form>
  )
}
