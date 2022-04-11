import React, { useContext, useEffect } from 'react'
import styles from './FirstPage.module.css'
import womenImg from 'assets/img/stages/1/women.svg'
import manImg from 'assets/img/stages/1/man.svg'
import { Store } from 'store'
import { useSelector } from 'hooks/useSelector'
import { useDispatch } from 'hooks/useDispatch'
import { setValue } from 'store/params/actions'

const FirstPage = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()


  return (
    <>
      <div>
        <h4 className="content__title">You are looking for</h4>
        <div className="item_wrapper">
          <div className="item first_and_second_item">
            <img src={womenImg} alt="" />
            Women's Styles
          </div>
          <div
            className="item first_and_second_item"
            onClick={() => dispatch(setValue('gender', 1))}
          >
            <img src={manImg} alt="" />
            Men's Styles
          </div>
        </div>
      </div>
      <div className="bottom_link">I'd like to see both</div>
    </>
  )
}

export default FirstPage
