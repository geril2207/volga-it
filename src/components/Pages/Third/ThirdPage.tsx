import React from 'react'
import { useDispatch } from 'hooks/useDispatch'
import { moveForward, setPage } from 'store/transitions/actions'
import BottomLink from '../../BottomLink/BottomLink'
import { IPage } from '../types'
import { setValue } from 'store/params/actions'

const ThirdPage: React.FC<IPage> = () => {
  const dispatch = useDispatch()

  function toThirdPTwoHandler() {
    dispatch(setPage(3.2))
  }
  function toNextHandler() {
    dispatch(moveForward())
    dispatch(setValue('lenstype', null))
  }
  return (
    <>
      <div>
        <h4 className="content__title">Do you need vision correction?</h4>
        <div className="item_wrapper">
          <div className="item third_item" onClick={toThirdPTwoHandler}>
            Yes
          </div>
          <div className="item third_item" onClick={toNextHandler}>
            No
          </div>
        </div>
      </div>
      <BottomLink textContent={'Skip'} />
    </>
  )
}

export default ThirdPage
