import BottomLink from 'components/BottomLink/BottomLink'
import React from 'react'
import { IPage } from '../types'

const SeventhPage: React.FC<IPage> = ({ dispatch }) => {
  function clickHandler(value: 'sharp' | 'rounded' | 'between') {
    return () => dispatch('facial_features', value)
  }
  return (
    <>
      <div>
        <h4 className="content__title">
          How would you define your facial features?
        </h4>
        <div className="item_wrapper">
          <div className="item third_item" onClick={clickHandler('sharp')}>
            Sharp
          </div>
          <div className="item third_item" onClick={clickHandler('between')}>
            Rounded
          </div>
          <div className="item third_item" onClick={clickHandler('between')}>
            In between
          </div>
        </div>
      </div>
      <BottomLink textContent={'I don’t know'} />
    </>
  )
}

export default SeventhPage
