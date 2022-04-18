import HorizontalScrollable from 'components/HorizontalDraggable/HorizontalScrollable'
import withAnim from 'hoc/withAnim'
import { useDispatch } from 'hooks/useDispatch'
import { useSelector } from 'hooks/useSelector'
import React, { useState } from 'react'
import { setValue } from 'store/params/actions'
import { moveForward } from 'store/transitions/actions'
import { IPage } from '../types'
import styles from './EighthPage.module.scss'
import { glassesItems, glassesItemsValue } from './EighthPageItems'
import selectedImg from 'assets/img/selected.svg'
import { useSelectedItems } from 'hooks/useSelectedItems'

const EighthPage: React.FC<IPage> = () => {
  const selectedItems: string[] = useSelector((state) => state.params.shape)
  const dispatch = useDispatch()
  const selectHandler = (value: string) => () => {
    return dispatch(setValue('shape', value))
  }

  const nextHandler = () => () => {
    return dispatch(moveForward())
  }
  console.log(selectedItems)

  return (
    <>
      <div>
        <h4 className="content__title">Which frame style are you looking for?</h4>
        <h6 className="content__subtitle">You can pick more than one.</h6>
        <HorizontalScrollable>
          <div className={styles.grid}>
            {glassesItems.map((item, index) => {
              const isItemExists = selectedItems.includes(item.value)
              return (
                <div
                  className={`eighth__item ${isItemExists ? 'selected' : ''}`}
                  key={`${item.value}_${index}`}
                  onClick={selectHandler(item.value)}
                >
                  <div>
                    <img src={item.img} alt="Glasses" />
                  </div>
                  <div>{item.title}</div>
                </div>
              )
            })}
          </div>
        </HorizontalScrollable>
      </div>
      <button
        className={`btn ${styles.btn}`}
        disabled={!selectedItems.length}
        onClick={nextHandler()}
      >
        Continue
      </button>
    </>
  )
}

export default EighthPage
