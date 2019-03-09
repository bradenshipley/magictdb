import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Decks from './components/Decks/Decks'
import Account from './components/Account/Account'
import Statistics from './components/Statistics/Statistics'
import Random from './components/Random/Random'
import Browse from './components/Browse/Browse'
export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/decks' component={Decks} />
    <Route path='/browse' component={Browse} />
    <Route path='/random' component={Random} />
    <Route path='/account' component={Account} />
    <Route path='/stats' component={Statistics} />
  </Switch>
)
