import HorizontalScrollable from 'components/HorizontalDraggable/HorizontalScrollable'
import { useDispatch } from 'hooks/useDispatch'
import { useSelector } from 'hooks/useSelector'
import React from 'react'
import { setValue } from 'store/params/actions'
import { moveForward } from 'store/transitions/actions'
import { brandsItems } from './TenthPageItems'

const TenthPage = () => {
  const brandItems: string[] = useSelector((state) => state.params.brand)
  const dispatch = useDispatch()
  const selectHandler = (value: string) => () => {
    return dispatch(setValue('brand', value))
  }

  const nextHandler = () => () => {
    return dispatch(moveForward())
  }
  console.log(brandItems)

  return (
    <>
      <div>
        <h4 className="content__title">Which frame style are you looking for?</h4>
        <h6 className="content__subtitle">You can pick more than one.</h6>
        <HorizontalScrollable>
          <div className="grid__container">
            {brandsItems.map((item, index) => {
              const isItemExists = brandItems.includes(item.value)
              return (
                <div
                  className={`eighth__item ${isItemExists ? 'selected' : ''}`}
                  key={`${item.value}_${index}`}
                  onClick={selectHandler(item.value)}
                >
                  <div>
                    <img src={item.img} alt="Glasses" />
                  </div>
                </div>
              )
            })}
          </div>
        </HorizontalScrollable>
      </div>
      <button
        className={`btn custom__button`}
        disabled={!brandItems.length}
        onClick={nextHandler()}
      >
        Continue
      </button>
    </>
  )
}

export default TenthPage
