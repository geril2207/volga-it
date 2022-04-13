import React from 'react'
import frameSizeImg from 'assets/img/stages/4/sizes.png'
import BottomLink from 'components/BottomLink/BottomLink'
import styles from './FourthPageSecond.module.scss'
import useSetValueAndMoveForward from 'hooks/useSetValueAndMoveForward'

const FourthPageSecond = () => {
  const dispatch = useSetValueAndMoveForward()

  const clickHandler = (value) => {
    return () => {
      dispatch('frame_size', value)
    }
  }
  return (
    <>
      <div>
        <h4 className="content__title">How wide would you say your face is?</h4>
        <div className="item_wrapper">
          <div className={`item ${styles.item}`} onClick={clickHandler(68)}>
            Wider Than Average
          </div>
          <div className={`item ${styles.item}`} onClick={clickHandler(67)}>
            Average
          </div>
          <div className={`item ${styles.item}`} onClick={clickHandler(66)}>
            Narrower Than Average
          </div>
        </div>
      </div>
      <BottomLink textContent={'I’m not sure'} />
    </>
  )
}

export default FourthPageSecond
