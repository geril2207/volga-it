import React, { useRef } from 'react'
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
} from 'components/Pages'
import { PageLayout } from 'components'
import useSetValueAndMoveForward from 'hooks/useSetValueAndMoveForward'
import withAnim from 'hoc/withAnim'
import { IPage } from 'components/Pages/types'
import { useSwipe } from 'hooks/useSwipe'
import { useSkipPage } from 'hooks/useSkipPage'
import { useDispatch } from 'hooks/useDispatch'
import { moveBack } from 'store/transitions/actions'

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
  m3: Between23And4,
  start: StartPage,
}

const PagesRouter = () => {
  const currentPage: transitionsCurrentPage = useSelector(
    (state) => state.transitions.currentPage
  )
  const {
    touchEndHandler,
    touchStartHandler,
    mouseDownHandler,
    mouseUpHandler,
  } = useSwipe()

  const Component: React.FC = withAnim(
    components[currentPage] ?? components['start']
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
