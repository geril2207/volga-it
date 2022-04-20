import { useSelector } from 'hooks/useSelector'
import React from 'react'
import { Header, PagesRouter } from './components'

function App() {
  const state = useSelector()
  // console.table(state.params)
  return (
    <div className="app">
      <Header />
      <PagesRouter />
    </div>
  )
}

export default App
