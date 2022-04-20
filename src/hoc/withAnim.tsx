import React from 'react'
import { IPage } from 'components/Pages/types'
import { useSelector } from 'hooks/useSelector'
import useSetValueAndMoveForward from 'hooks/useSetValueAndMoveForward'
import { useRef, FC } from 'react'

const withAnim = (Component: FC<IPage>) => () => {
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

export default withAnim
