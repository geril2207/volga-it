import React, { useEffect } from 'react'
import { moveBack } from 'store/transitions/actions'
import { useDispatch } from './useDispatch'
import { useSkipPage } from './useSkipPage'

export const useSwipe = () => {
  const dispatch = useDispatch()
  const skipPageHandler = useSkipPage()
  let cords: { start: number; end: number; isElemScrollable: boolean } = {
    start: 0,
    end: 0,
    isElemScrollable: false,
  }

  const touchStartHandler = (e) => {
    if (
      e.target.offsetParent.classList.contains('container__scrollable') ||
      e.target.offsetParent.classList.contains('eighth__item')
    ) {
      return (cords.isElemScrollable = true)
    }
    cords.start = e.changedTouches[0].screenX
  }

  const touchEndHandler = (e) => {
    if (cords.isElemScrollable) return (cords.isElemScrollable = false)
    cords.end = e.changedTouches[0].screenX
    const difference = cords.end - cords.start
    if (difference < -40) skipPageHandler()
    if (difference > 40) dispatch(moveBack())
  }

  const mouseDownHandler = (e) => {
    cords.start = e.screenX
  }
  const mouseUpHandler = (e) => {
    cords.end = e.screenX
    const difference = cords.end - cords.start
    if (difference < -70) skipPageHandler()
    if (difference > 70) dispatch(moveBack())
  }

  return {
    touchEndHandler,
    touchStartHandler,
    mouseDownHandler,
    mouseUpHandler,
  }
}
