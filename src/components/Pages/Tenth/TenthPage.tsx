import React from 'react'
import HorizontalScrollable from 'components/HorizontalDraggable/HorizontalScrollable'
import { useDispatch } from 'hooks/useDispatch'
import { useSelector } from 'hooks/useSelector'
import { setValue } from 'store/params/actions'
import { moveForward } from 'store/transitions/actions'
import { brandsItems } from './TenthPageItems'
import selectImg from 'assets/img/selected.svg'

const TenthPage = () => {
  const brandItems: string[] = useSelector((state) => state.params.brand)
  const dispatch = useDispatch()
  const selectHandler = (value: string) => () => {
    return dispatch(setValue('brand', value))
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
          <div className="grid__container mt-25">
            {brandsItems.map((item, index) => {
              const isItemExists = brandItems.includes(item.value)
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
                </div>
              )
            })}
          </div>
        </HorizontalScrollable>
        <button
          className={`btn custom__button mt-25`}
          disabled={!brandItems.length}
          onClick={nextHandler()}
        >
          Continue
        </button>
      </div>
    </>
  )
}

export default TenthPage
