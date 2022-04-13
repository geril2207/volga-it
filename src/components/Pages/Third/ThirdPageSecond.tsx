import React from 'react'
import BottomLink from 'components/BottomLink/BottomLink'
import useSetValueAndMoveForward from 'hooks/useSetValueAndMoveForward'

const ThirdPageSecond = () => {
  const dispatch = useSetValueAndMoveForward()

  const clickHandler = (value: 5 | 6 | 7) => {
    return () => {
      dispatch('lenstype', value)
    }
  }
  return (
    <>
      <div>
        <h4 className="content__title">Do you need vision correction?</h4>
        <div className="item_wrapper">
          <div className="item third_item" onClick={clickHandler(5)}>
            Near Vision
          </div>
          <div className="item third_item" onClick={clickHandler(6)}>
            Distance Vision
          </div>
          <div className="item third_item" onClick={clickHandler(7)}>
            Multifocal / Progressive
          </div>
        </div>
      </div>
      <BottomLink textContent={'Skip'} />
    </>
  )
}

export default ThirdPageSecond
