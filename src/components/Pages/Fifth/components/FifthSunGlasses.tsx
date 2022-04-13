import React from 'react'
import BottomLink from 'components/BottomLink/BottomLink'
import { IFifthGlasses } from './types'
import styles from './FifthGlasses.module.scss'
import darkShadeImg from 'assets/img/stages/5/dark-shade.svg'
import lightShadeImg from 'assets/img/stages/5/light-shade.svg'
import transShadeImg from 'assets/img/stages/5/shade.svg'

const FifthSunGlasses = ({ clickHandler }: IFifthGlasses) => {
  return (
    <>
      <div>
        <h4 className="content__title">
          When you’re out and about, which shade of lenses do you prefer?
        </h4>
        <div className="item_wrapper">
          <div
            className={`item ${styles.shade_item}`}
            onClick={clickHandler('shade', 'dark')}
          >
            <div>
              <img src={darkShadeImg} alt="Dark" />
            </div>
            <span>Dark Shade</span>
          </div>
          <div
            className={`item ${styles.shade_item}`}
            onClick={clickHandler('shade', 'light')}
          >
            <div>
              <img src={lightShadeImg} alt="Light" />
            </div>
            <span>Light Shade</span>
          </div>
          <div
            className={`item ${styles.shade_item}`}
            onClick={clickHandler('shade', 'transition')}
          >
            <div>
              <img src={transShadeImg} alt="Transition" />
            </div>
            <span>Transitioning Shade</span>
          </div>
        </div>
      </div>
      <BottomLink textContent={'I’m not sure'} />
    </>
  )
}

export default FifthSunGlasses
