import HorizontalScrollable from 'components/HorizontalDraggable/HorizontalScrollable'
import { useDispatch } from 'hooks/useDispatch'
import { useSelector } from 'hooks/useSelector'
import React from 'react'
import { setValue } from 'store/params/actions'
import { moveForward } from 'store/transitions/actions'
import { IPage } from '../types'
import styles from './EighthPage.module.scss'
import { glassesItems } from './EighthPageItems'
import selectImg from 'assets/img/selected.svg'

const EighthPage: React.FC<IPage> = () => {
  const selectedItems: string[] = useSelector((state) => state.params.shape)
  const dispatch = useDispatch()
  const selectHandler = (value: string) => () => {
    return dispatch(setValue('shape', value))
  }

  const nextHandler = () => () => {
    return dispatch(moveForward())
  }

  return (
    <>
      <div>
        <h4 className="content__title">Which frame style are you looking for?</h4>
        <h6 className="content__subtitle">You can pick more than one.</h6>
        <HorizontalScrollable>
          <div className={`grid__container ${styles.grid}`}>
            {glassesItems.map((item, index) => {
              const isItemExists = selectedItems.includes(item.value)
              return (
                <div
                  className={`eighth__item ${isItemExists ? 'eighth__item_selected' : ''}`}
                  key={`${item.value}_${index}`}
                  onClick={selectHandler(item.value)}
                >
                  <div className="eighth__item_img_selected">
                    <img src={selectImg} alt="" />
                  </div>
                  <div>
                    <img src={item.img} alt="Glasses" />
                  </div>
                  <div>{item.title}</div>
                </div>
              )
            })}
          </div>
        </HorizontalScrollable>
        <button
          className={`btn ${styles.btn} mt-25`}
          disabled={!selectedItems.length}
          onClick={nextHandler()}
        >
          Continue
        </button>
      </div>
    </>
  )
}

export default EighthPage
