import BottomLink from 'components/BottomLink/BottomLink'
import useSetValueAndMoveForward from 'hooks/useSetValueAndMoveForward'
import React from 'react'
import { IFifthGlasses } from './types'

const FifthEyeGlasses = ({ clickHandler }: IFifthGlasses) => {
  return (
    <>
      <div>
        <h4 className="content__title">
          Would you like to protect your eyes from light emanating from screens?
        </h4>
        <div className="item_wrapper">
          <div
            className="item third_item"
            onClick={clickHandler('blue_light', true)}
          >
            Yes
          </div>
          <div
            className="item third_item"
            onClick={clickHandler('blue_light', false)}
          >
            No
          </div>
        </div>
      </div>
      <BottomLink textContent={'I’m not sure'} />
    </>
  )
}

export default FifthEyeGlasses
