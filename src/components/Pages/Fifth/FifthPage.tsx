import React from 'react'
import BottomLink from 'components/BottomLink/BottomLink'
import useSetValueAndMoveForward from 'hooks/useSetValueAndMoveForward'
import { useSelector } from 'hooks/useSelector'
import FifthEyeGlasses from './components/FifthEyeGlasses'
import FifthSunGlasses from './components/FifthSunGlasses'

const FifthPage = () => {
  const type = useSelector((state) => state.params.eyewear_type)
  const dispatch = useSetValueAndMoveForward()

  const clickHandler = (type, value) => {
    return () => {
      dispatch(type, value)
    }
  }
  if (!type || type === 210) {
    return <FifthEyeGlasses clickHandler={clickHandler} />
  }
  return <FifthSunGlasses clickHandler={clickHandler} />
}

export default FifthPage
