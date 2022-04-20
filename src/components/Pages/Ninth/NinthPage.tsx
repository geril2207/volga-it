import React from 'react'
import { useDispatch } from 'hooks/useDispatch'
import { setPage } from 'store/transitions/actions'

const NinthPage = () => {
  const dispatch = useDispatch()

  const clickHandler =
    (page: 10 | 11 = 10) =>
    () =>
      dispatch(setPage(page))

  return (
    <>
      <div>
        <h4 className="content__title">What type of glasses are you looking for?</h4>
        <div className="item_wrapper">
          <div className="item first_and_second_item" onClick={clickHandler(10)}>
            Yes, I have some in mind
          </div>
          <div className="item first_and_second_item" onClick={clickHandler(11)}>
            No, brand isn't important
          </div>
        </div>
      </div>
    </>
  )
}

export default NinthPage
