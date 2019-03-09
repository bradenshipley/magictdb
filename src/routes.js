import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Decks from './components/Decks/Decks'
import Account from './components/Account/Account'
import Statistics from './components/Statistics/Statistics'
export default (
  <Switch>
    <Route path='/' component={Home} />
    <Route path='/decks' component={Decks} />
    <Route path='/account' component={Account} />
    <Route path='/stats' component={Statistics} />
  </Switch>
)
