import React from 'react'
import { useSelector } from 'hooks/useSelector'
import FifthEyeGlasses from './components/FifthEyeGlasses'
import FifthSunGlasses from './components/FifthSunGlasses'
import { IPage } from '../types'

const FifthPage: React.FC<IPage> = ({ dispatch }) => {
  const type = useSelector((state) => state.params.eyewear_type)

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
