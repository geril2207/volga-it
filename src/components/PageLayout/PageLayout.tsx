import { useSelector } from 'hooks/useSelector'
import React, { useLayoutEffect, useRef } from 'react'

interface IPageLayout {
  page: React.FC
}

const PageLayout = ({ page: Page }: IPageLayout) => {
  const moveTo = useSelector((state) => state.transitions.moveTo)
  const pageWrapper = useRef<HTMLDivElement>(null)
  const animStyle = moveTo === 'next' ? 'show_forw' : 'show_back'

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
  }, [Page, animStyle])

  return (
    <div className={`page_wrapper ${animStyle}`} ref={pageWrapper}>
      <Page />
    </div>
  )
}

export default PageLayout
