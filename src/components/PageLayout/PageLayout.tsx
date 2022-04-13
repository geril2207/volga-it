import { IPage } from 'components/Pages/types'
import { useSelector } from 'hooks/useSelector'
import useSetValueAndMoveForward from 'hooks/useSetValueAndMoveForward'
import React, { useLayoutEffect, useRef } from 'react'

interface IPageLayout {
  page: React.FC<IPage>
}

const PageLayout: React.FC<IPageLayout> = ({ page: Component }) => {
  const moveTo = useSelector((state) => state.transitions.moveTo)
  const pageWrapper = useRef<HTMLDivElement>(null)
  const animStyle = moveTo === 'next' ? 'show_forw' : 'show_back'
  const dispatch = useSetValueAndMoveForward()

  // TODO Сделать анимацию если 300 мс не прошло
  useLayoutEffect(() => {
    if (pageWrapper.current) {
      pageWrapper.current?.classList.remove('animated')
      pageWrapper.current.classList.add(animStyle)
      setTimeout(() => {
        pageWrapper.current?.classList.remove(animStyle)
        pageWrapper.current?.classList.add('animated')
      }, 300)
    }
  }, [Component, animStyle])

  return (
    <div className={`page_wrapper ${animStyle}`} ref={pageWrapper}>
      {<Component dispatch={dispatch} />}
    </div>
  )
}

export default PageLayout
