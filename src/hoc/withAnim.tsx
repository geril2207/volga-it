import { IPage } from 'components/Pages/types'
import { useSelector } from 'hooks/useSelector'
import useSetValueAndMoveForward from 'hooks/useSetValueAndMoveForward'
import { useRef, useLayoutEffect, FC } from 'react'

const withAnim = (Component: FC<IPage>) => () => {
  const moveTo = useSelector((state) => state.transitions.moveTo)
  const pageWrapper = useRef<HTMLDivElement>(null)
  const animStyle = moveTo === 'next' ? 'show_forw' : 'show_back'
  const dispatch = useSetValueAndMoveForward()

  useLayoutEffect(() => {
    if (pageWrapper.current) {
      const timeout = setTimeout(() => {
        pageWrapper.current?.classList.remove(animStyle)
        pageWrapper.current?.classList.add('animated')
      }, 300)
      pageWrapper.current?.classList.remove('animated')
      pageWrapper.current.classList.add(animStyle)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [animStyle])

  return (
    <div className={`page_wrapper ${animStyle}`} ref={pageWrapper}>
      <Component dispatch={dispatch} />
    </div>
  )
}

export default withAnim
