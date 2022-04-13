import React from 'react'
import styles from './SecondPage.module.css'
import eyeglassesImg from 'assets/img/stages/2/eyeglasses.svg'
import sunglassesImg from 'assets/img/stages/2/sunglasses.svg'
import BottomLink from '../../BottomLink/BottomLink'
import { useDispatch } from 'hooks/useDispatch'
import { setValue } from 'store/params/actions'
import { moveForward } from 'store/transitions/actions'
import useSetValueAndMoveForward from 'hooks/useSetValueAndMoveForward'

const SecondPage = () => {
  const dispatch = useSetValueAndMoveForward()

  const clickHandler = (value: 210 | 211) => {
    return () => {
      dispatch('eyewear_type', value)
    }
  }
  return (
    <>
      <div>
        <h4 className="content__title">
          What type of glasses are you looking for?
        </h4>
        <div className="item_wrapper">
          <div
            className="item first_and_second_item"
            onClick={clickHandler(210)}
          >
            <img src={eyeglassesImg} alt="" />
            Eyeglasses
          </div>
          <div
            className="item first_and_second_item"
            onClick={clickHandler(211)}
          >
            <img src={sunglassesImg} alt="" />
            Sunglasses
          </div>
        </div>
      </div>
      <BottomLink textContent={'I want to see both'} />
    </>
  )
}

export default SecondPage
