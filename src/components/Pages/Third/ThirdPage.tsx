import { useDispatch } from 'hooks/useDispatch'
import React from 'react'
import { moveForward, setPage } from 'store/transitions/actions'
import BottomLink from '../../BottomLink/BottomLink'

const ThirdPage = () => {
  const dispatch = useDispatch()

  function toThirdPTwoHandler() {
    dispatch(setPage(3.2))
  }
  return (
    <>
      <div>
        <h4 className="content__title">Do you need vision correction?</h4>
        <div className="item_wrapper">
          <div className="item third_item" onClick={toThirdPTwoHandler}>
            Yes
          </div>
          <div
            className="item third_item"
            onClick={() => dispatch(moveForward())}
          >
            No
          </div>
        </div>
      </div>
      <BottomLink textContent={'Skip'} />
    </>
  )
}

export default ThirdPage
