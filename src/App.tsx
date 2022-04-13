import { useSelector } from 'hooks/useSelector'
import React from 'react'
import { Header, PagesRouter } from './components'

function App() {
  const state = useSelector()
  console.log(state)

  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <PagesRouter />
      </div>
    </div>
  )
}

export default App
