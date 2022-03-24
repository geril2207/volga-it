import React from 'react'
import { FirstPage } from 'components/Pages'
import { Header, StartPage } from './components'

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
