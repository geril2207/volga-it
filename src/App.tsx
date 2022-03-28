import React from 'react'
import { FirstPage, Header, SecondPage, StartPage } from './components'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <SecondPage />
      </div>
    </div>
  )
}

export default App
