import React, { useEffect } from 'react'
import likeImg from 'assets/img/like.svg'
import { useDispatch } from 'hooks/useDispatch'
import { moveForward } from 'store/transitions/actions'
import { useSelector } from 'hooks/useSelector'
import { transitionsCurrentPage } from 'store/transitions/reducer'

const Between23And4 = () => {
  const dispatch = useDispatch()
  const currentPage: transitionsCurrentPage = useSelector(
    (state) => state.transitions.currentPage
  )
  const textContent =
    currentPage === 'm3'
      ? "Let's get to know you!"
      : 'No worries, we’ve got you!'
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(moveForward())
    }, 100)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div>
      <div className="middleware_like_wrap">
        <img src={likeImg} alt="Like" />
      </div>
      <div className="middleware_text_content">{textContent}</div>
    </div>
  )
}

export default Between23And4
