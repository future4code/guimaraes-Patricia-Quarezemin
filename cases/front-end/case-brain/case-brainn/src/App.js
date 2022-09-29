import React from 'react'
import { Router } from 'react-router-dom'
import { GlobalState } from './context/globalState'

const App = () => {
  return (
    <div>
      <GlobalState>
      <Router />
      </GlobalState>
    </div>
  )
}

export default App
