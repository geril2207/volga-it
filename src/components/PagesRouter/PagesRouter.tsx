import { useSelector } from 'hooks/useSelector'
import React from 'react'

import { transitionsCurrentPage } from 'store/transitions/reducer'
import {
  FifthPage,
  FirstPage,
  FourthPage,
  FourthPageSecond,
  PageLayout,
  SecondPage,
  SeventhPage,
  SixthPage,
  StartPage,
  ThirdPage,
  Between23and4,
  ThirdPageSecond,
} from 'components'

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
