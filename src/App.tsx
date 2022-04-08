import React from 'react'
import {
  Between23and4,
  FirstPage,
  Header,
  SecondPage,
  StartPage,
} from './components'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <FirstPage />
      </div>
    </div>
  )
}

export default App
