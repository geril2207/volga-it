import React from 'react'
import frameSizeImg from 'assets/img/stages/4/sizes.png'
import BottomLink from 'components/BottomLink/BottomLink'
import styles from './FourthPage.module.scss'
import { IPage } from '../types'

const FourthPage: React.FC<IPage> = ({ dispatch }) => {
  const clickHandler = (value) => {
    return () => {
      dispatch('frame_size', value)
    }
  }
  return (
    <>
      <div>
        <h4 className="content__title">What’s your current frame size?</h4>
        <img className={styles.img} src={frameSizeImg} alt="Ширина оправы" />
        <div className="item_wrapper">
          <div className={`item ${styles.item}`} onClick={clickHandler(68)}>
            Small <span>42-48 mm</span>
          </div>
          <div className={`item ${styles.item}`} onClick={clickHandler(67)}>
            Medium <span>49-53 mm</span>
          </div>
          <div className={`item ${styles.item}`} onClick={clickHandler(66)}>
            Large <span>54-58 mm</span>
          </div>
        </div>
      </div>
      <BottomLink textContent={'I don’t know'} toPage={'m4'} />
    </>
  )
}

export default FourthPage
