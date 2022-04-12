import { useSelector } from 'hooks/useSelector'
import React from 'react'
import FirstPage from '../First/FirstPage'
import SecondPage from '../Second/SecondPage'
import StartPage from '../StartPage/StartPage'

const PagesRouter = () => {
  const currentPage = useSelector((state) => state.transitions.currentPage)

  switch (currentPage) {
    case 1:
      return <FirstPage />
    case 2:
      return <SecondPage />
    case 10:
      return <SecondPage />
    default:
      return <StartPage />
  }
}

export default PagesRouter
