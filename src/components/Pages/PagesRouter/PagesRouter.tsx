import { useSelector } from 'hooks/useSelector'
import React from 'react'
import FirstPage from '../First/FirstPage'
import PageLayout from '../PageLayout/PageLayout'
import SecondPage from '../Second/SecondPage'
import StartPage from '../StartPage/StartPage'

const PagesRouter = () => {
  const currentPage = useSelector((state) => state.transitions.currentPage)

  switch (currentPage) {
    case 1:
      return <PageLayout page={FirstPage} />
    case 2:
      return <PageLayout page={SecondPage} />
    case 10:
      return <SecondPage />
    default:
      return <PageLayout page={StartPage} />
  }
}

export default PagesRouter
