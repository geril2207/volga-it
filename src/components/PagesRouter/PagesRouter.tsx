import { useSelector } from 'hooks/useSelector'
import React from 'react'
import FirstPage from '../Pages/First/FirstPage'
import PageLayout from '../PageLayout/PageLayout'
import SecondPage from '../Pages/Second/SecondPage'
import StartPage from '../Pages/StartPage/StartPage'
import ThirdPage from '../Pages/Third/ThirdPage'
import { transitionsCurrentPage } from 'store/transitions/reducer'
import { Between23and4 } from 'components/Pages/MiddlewarePages'
import ThirdPageSecond from 'components/Pages/Third/ThirdPageSecond'
import FourthPage from 'components/Pages/Fourth/FourthPage'
import FourthPageSecond from 'components/Pages/Fourth/FourthPageSecond'
import FifthPage from 'components/Pages/Fifth/FifthPage'

const PagesRouter = () => {
  const currentPage: transitionsCurrentPage = useSelector(
    (state) => state.transitions.currentPage
  )

  switch (currentPage) {
    case 'm3':
      return <PageLayout page={Between23and4} />
    case 'm4':
      return <PageLayout page={Between23and4} />
    case 1:
      return <PageLayout page={FirstPage} />
    case 2:
      return <PageLayout page={SecondPage} />
    case 3:
      return <PageLayout page={ThirdPage} />
    case 3.2:
      return <PageLayout page={ThirdPageSecond} />
    case 4:
      return <PageLayout page={FourthPage} />
    case 4.2:
      return <PageLayout page={FourthPageSecond} />
    case 5:
      return <PageLayout page={FifthPage} />
    default:
      return <PageLayout page={StartPage} />
  }
}

export default PagesRouter
