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
        <h4 className="content__title final__title">We've found some awesome frames for you!</h4>
        <h5 className="final__subtitle">
          Send the results to your email to receive special discounts.
        </h5>
        <button className="btn custom__button final__button" onClick={() => link()}>
          Send
        </button>
      </div>
      <div className="final__agree">
        By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion
        emails
      </div>
    </>
  )
}

export default FinalPage
