import React from 'react'
import { useLink } from 'hooks/useLink'
import giftImg from 'assets/img/stages/final/gift.svg'
import crosshairImg from 'assets/img/stages/final/crosshair.svg'
import './FinalPage.scss'

const FinalPage = () => {
  const link = useLink()

  return (
    <>
      <div>
        <div className="middleware_like_wrap final__wrap">
          <img src={giftImg} alt="Gift" />
          <img className="final__crosshair" src={crosshairImg} alt="" />
          <img className="final__crosshair final__crosshair_rotated" src={crosshairImg} alt="" />
        </div>
        <h4 className="content__title">We've found some awesome frames for you!</h4>
        <h5>Send the results to your email to receive special discounts.</h5>
        <button onClick={() => link()}>Send</button>
      </div>
    </>
  )
}

export default FinalPage
