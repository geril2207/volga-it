import { IPage } from 'components/Pages/types'
import { useSelector } from 'hooks/useSelector'
import useSetValueAndMoveForward from 'hooks/useSetValueAndMoveForward'
import React, {  useRef } from 'react'

interface IPageLayout {
  page: React.FC<IPage>
}
const PageLayout: React.FC<IPageLayout> = ({ page: Component }) => {
  const moveTo = useSelector((state) => state.transitions.moveTo)
  const pageWrapper = useRef<HTMLDivElement>(null)
  const animStyle = moveTo === 'next' ? 'show_forw' : 'show_back'
  const dispatch = useSetValueAndMoveForward()

  return (
    <div className={`page_wrapper ${animStyle}`} ref={pageWrapper}>
      <Component dispatch={dispatch} />
    </div>
  )
}

export default PageLayout
