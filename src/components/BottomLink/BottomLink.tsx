import { useDispatch } from 'hooks/useDispatch'
import { useSelector } from 'hooks/useSelector'
import React from 'react'
import { setValue } from 'store/params/actions'
import { IParamsStore } from 'store/params/reducer'
import { moveForward, setPage } from 'store/transitions/actions'
import { transitionsCurrentPage } from 'store/transitions/reducer'

interface IBottomLink {
  textContent: string
  toPage?: transitionsCurrentPage
}

const pagesToValues = {
  1: 'gender',
  2: 'eyewear_type',
  3.2: 'lenstype',
  4: 'frame_size',
  5: 'blue_light',
  6: 'face_shape',
  7: 'facial_features',
  8: 'shape',
  10: 'brand',
}

const BottomLink = ({ textContent, toPage }: IBottomLink) => {
  const currentPage = useSelector((state) => state.transitions.currentPage)
  const dispatch = useDispatch()

  const skipPageHandler = () => {
    if (pagesToValues[currentPage])
      dispatch(setValue(pagesToValues[currentPage], null))
    dispatch(toPage ? setPage(toPage) : moveForward())
  }
  return (
    <div className="bottom_link" onClick={skipPageHandler}>
      {textContent}
    </div>
  )
}

export default BottomLink
