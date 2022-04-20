import React, { useMemo } from 'react'
import { useSelector } from 'hooks/useSelector'

import { transitionsCurrentPage } from 'store/transitions/reducer'
import {
  FirstPage,
  SecondPage,
  ThirdPage,
  ThirdPageSecond,
  FourthPage,
  FourthPageSecond,
  FifthPage,
  SixthPage,
  SeventhPage,
  Between23And4,
  StartPage,
  EighthPage,
  NinthPage,
} from 'components/Pages'
import withAnim from 'hoc/withAnim'
import { useSwipe } from 'hooks/useSwipe'
import TenthPage from 'components/Pages/Tenth/TenthPage'
import FinalPage from 'components/Pages/FinalPage/FinalPage'

// import {
//   Between23and4,
//   FifthPage,
//   FirstPage,
//   FourthPage,
//   FourthPageSecond,
//   PageLayout,
//   SecondPage,
//   SeventhPage,
//   SixthPage,
//   StartPage,
//   ThirdPage,
//   ThirdPageSecond,
// } from 'components'

// const components = {
//   1: withAnim(FirstPage),
//   2: withAnim(SecondPage),
//   3: withAnim(ThirdPage),
//   3.2: withAnim(ThirdPageSecond),
//   4: withAnim(FourthPage),
//   4.2: withAnim(FourthPageSecond),
//   5: withAnim(FifthPage),
//   6: withAnim(SixthPage),
//   7: withAnim(SeventhPage),
//   8: withAnim(EighthPage),
//   9: withAnim(NinthPage),
//   m3: withAnim(Between23And4),
//   start: withAnim(StartPage),
// }

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
  8: EighthPage,
  9: NinthPage,
  10: TenthPage,
  11: FinalPage,
  m3: Between23And4,
  m4: Between23And4,
  start: StartPage,
}

const PagesRouter = () => {
  const currentPage: transitionsCurrentPage = useSelector((state) => state.transitions.currentPage)

  const { touchEndHandler, touchStartHandler, mouseDownHandler, mouseUpHandler } = useSwipe()

  const Component: React.FC = useMemo(
    () => withAnim(components[currentPage] ?? components['start']),
    [currentPage]
  )
  return (
    <div
      className="app_body"
      onTouchEnd={touchEndHandler}
      onTouchStart={touchStartHandler}
      onMouseUp={mouseUpHandler}
      onMouseDown={mouseDownHandler}
    >
      <Component />
    </div>
  )
  // return <PageLayout page={components[currentPage] ?? components['start']} />
}

export default PagesRouter
