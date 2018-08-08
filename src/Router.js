import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import MensWear from './pages/MensWear'
import WomensWear from './pages/WomensWear'

const Router = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/menswear' component={MensWear}/>
      <Route path='/womenswear' component={WomensWear}/>
    </Switch>
  </div>
)

export default Router
