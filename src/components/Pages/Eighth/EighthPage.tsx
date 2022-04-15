import HorizontalScrollable from 'components/HorizontalDraggable/HorizontalScrollable'
import React, { useState } from 'react'
import { IPage } from '../types'
import styles from './EighthPage.module.scss'
import { glassesItems, glassesItemsValue } from './EighthPageItems'

const EighthPage: React.FC<IPage> = ({ dispatch }) => {
  const [selectedGlasses, setselectedGlasses] =
    useState<glassesItemsValue>(null)

  function selectHandler(value: glassesItemsValue) {
    return () => setselectedGlasses(value)
  }

  return (
    <>
      <div>
        <h4 className="content__title">
          Which frame style are you looking for?
        </h4>
        <h6 className="content__subtitle">You can pick more than one.</h6>
        <HorizontalScrollable>
          <div className={styles.grid}>
            {glassesItems.map((item, index) => (
              <div
                className={`eighth__item`}
                key={`${item.value}_${index}`}
                onClick={selectHandler(item.value)}
              >
                <div>
                  <img src={item.img} alt="Glasses" />
                </div>
                <div>{item.title}</div>
              </div>
            ))}
          </div>
        </HorizontalScrollable>
      </div>
      <button className={`btn ${styles.btn}`} disabled={!selectedGlasses}>
        Continue
      </button>
    </>
  )
}

export default EighthPage
