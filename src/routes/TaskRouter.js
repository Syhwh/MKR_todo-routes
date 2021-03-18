import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { AddTaskComponent } from '../components/AddTaskComponent/AddTaskComponent'
import { EditTaskComponent } from '../components/EditTaskComponent/EditTaskComponent'
import { MainTaskComponent } from '../components/MainTaskComponent/MainTaskComponent'

export const TaskRouter = () => {

  return (
    <Router>
      <Switch>
        <Route path='/add' component={AddTaskComponent} />
        <Route path='/edit/:id' component={EditTaskComponent} />
        <Route path='/' component={MainTaskComponent} />
      </Switch>
    </Router>
  )
}
