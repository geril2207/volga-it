import HorizontalScrollable from 'components/HorizontalDraggable/HorizontalScrollable'
import React, { useState } from 'react'
import { IPage } from '../types'
import styles from './EighthPage.module.scss'
import { glassesItems, glassesItemsValue } from './EighthPageItems'
import selectedImg from 'assets/img/selected.svg'
import { useSelectedItems } from 'hooks/useSelectedItems'

const EighthPage: React.FC<IPage> = ({ dispatch }) => {
  // TODO : REFACTOR SELECT ITEM FROM HOOK TO REDUCER
  const [selectedGlasses, selectGlassesHandler] = useSelectedItems<glassesItemsValue>([])

  function nextHandler() {
    dispatch('shape', selectedGlasses)
  }

  return (
    <>
      <div>
        <h4 className="content__title">Which frame style are you looking for?</h4>
        <h6 className="content__subtitle">You can pick more than one.</h6>
        <HorizontalScrollable>
          <div className={styles.grid}>
            {glassesItems.map((item, index) => {
              const isItemSelected = selectedGlasses.includes(item.value)
              return (
                <div
                  className={`eighth__item ${isItemSelected ? 'eigtht__item_selected' : ''}`}
                  key={`${item.value}_${index}`}
                  onClick={selectGlassesHandler(item.value)}
                >
                  <div>
                    <img draggable={false} src={item.img} alt="Glasses" />
                  </div>
                  <div>{item.title}</div>
                  <div className={`${styles.selected} eighth__item_check`}>
                    <img src={selectedImg} alt="" />
                  </div>
                </div>
              )
            })}
          </div>
        </HorizontalScrollable>
      </div>
      <button
        className={`btn ${styles.btn}`}
        disabled={!selectedGlasses.length}
        onClick={() => nextHandler()}
      >
        Continue
      </button>
    </>
  )
}

export default EighthPage
