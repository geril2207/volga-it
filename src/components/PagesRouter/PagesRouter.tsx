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
import SixthPage from 'components/Pages/Sixth/SixthPage'
import SeventhPage from 'components/Pages/Seventh/SeventhPage'

const components = {
  1: FirstPage,
  2: SecondPage,
  3: ThirdPage,
  3.2: ThirdPageSecond,
  4: FourthPage,
  4.2: FourthPageSecond,
  5: FifthPage,
  6: SixthPage,
  7: SeventhPage,
  m3: Between23and4,
  start: StartPage,
}

const PagesRouter = () => {
  const currentPage: transitionsCurrentPage = useSelector(
    (state) => state.transitions.currentPage
  )
  return <PageLayout page={components[currentPage] ?? components['start']} />
}

export default PagesRouter
