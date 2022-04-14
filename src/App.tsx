import { useSelector } from 'hooks/useSelector'
import React from 'react'
import { Header, PagesRouter } from './components'

function App() {
  const state = useSelector()
  console.log(state)

  return (
    <div className="app">
      <Header />
      <PagesRouter />
    </div>
  )
}

export default App
