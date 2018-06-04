import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../containers/HomeContainer'
import Cart from '../containers/CartContainer'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </main>
  </div>
)

export default App
