import React from 'react'
import styles from './SecondPage.module.css'
import eyeglassesImg from 'assets/img/stages/2/eyeglasses.svg'
import sunglassesImg from 'assets/img/stages/2/sunglasses.svg'

const SecondPage = () => {
  return (
    <>
      <div>
        <h4 className="content__title">
          What type of glasses are you looking for?
        </h4>
        <div className="item_wrapper">
          <div className="item first_and_second_item">
            <img src={eyeglassesImg} alt="" />
            Eyeglasses
          </div>
          <div className="item first_and_second_item">
            <img src={sunglassesImg} alt="" />
            Sunglasses
          </div>
        </div>
      </div>
      <div className="bottom_link">I want to see both</div>
    </>
  )
}

export default SecondPage
