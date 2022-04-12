import { useSelector } from 'hooks/useSelector'
import React, { useEffect, useRef } from 'react'

const PageLayout = ({ page: Page }) => {
  const moveTo = useSelector((state) => state.transitions.moveTo)
  const pageWrapper = useRef<HTMLDivElement>(null)
  const animStyle = moveTo === 'next' ? 'show_forw' : 'show_back'
  useEffect(() => {
    if (pageWrapper.current) {
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
