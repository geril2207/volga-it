import React from 'react'
import bothBetweenImg from 'assets/img/stages/6/both/between.svg'
import bothLongImg from 'assets/img/stages/6/both/long.svg'
import bothRoundImg from 'assets/img/stages/6/both/round.svg'
import manRoundImg from 'assets/img/stages/6/man/round.svg'
import manBetweenImg from 'assets/img/stages/6/man/between.svg'
import manLongImg from 'assets/img/stages/6/man/long.svg'
import womenRoundImg from 'assets/img/stages/6/women/round.svg'
import womenBetweenImg from 'assets/img/stages/6/women/between.svg'
import womenLongImg from 'assets/img/stages/6/women/long.svg'
import { useSelector } from 'hooks/useSelector'
import BottomLink from 'components/BottomLink/BottomLink'
import { IPage } from '../types'

const imgs = {
  both: {
    long: bothLongImg,
    round: bothRoundImg,
    between: bothBetweenImg,
  },
  man: {
    long: manLongImg,
    round: manRoundImg,
    between: manBetweenImg,
  },
  women: {
    long: womenLongImg,
    round: womenRoundImg,
    between: womenBetweenImg,
  },
}

const SixthPage: React.FC<IPage> = ({ dispatch }) => {
  const gender = useSelector((state) => state.params.gender)

  function clickHandler(value) {
    return () => dispatch('face_shape', value)
  }

  const genderType = !gender ? 'both' : gender === 4 ? 'man' : 'women'
  return (
    <>
      <div>
        <h4 className="content__title">
          Every face shape has a perfect fit. What’s yours?
        </h4>
        <div className="item_wrapper">
          <div className={`item sixth__item`} onClick={clickHandler('long')}>
            <div>
              <img src={imgs[genderType].long} alt="Long" />
            </div>
            <span>I have a long face</span>
          </div>
          <div className={`item sixth__item`} onClick={clickHandler('round')}>
            <div>
              <img src={imgs[genderType].round} alt="Round" />
            </div>
            <span>I have a round face</span>
          </div>
          <div className={`item sixth__item`} onClick={clickHandler('between')}>
            <div>
              <img src={imgs[genderType].between} alt="Between" />
            </div>
            <span>In between</span>
          </div>
        </div>
      </div>
      <BottomLink textContent={'I don’t know'} />
    </>
  )
}

export default SixthPage
