import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Header from './Header'
import Top from '../Screen/Top'
import About from '../Screen/About'
import Skill from '../Screen/Skill'
import Project from '../Screen/Project'
import Contact from '../Screen/Contact'

import Ending from '../Screen/Ending'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Top} />
      <Route path="/about" component={About} />
      <Route path="/skill" component={Skill} />
      <Route path="/project" component={Project} />
      <Route path="/contact" component={Contact} />
      <Route path="/end" component={Ending} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
)
