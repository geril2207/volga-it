import React, { useEffect, useRef, useState } from 'react'

const HorizontalScrollable: React.FC = ({ children }) => {
  const [positionX, setPositionX] = useState(0)

  const touchVars = useRef<{ startX: number; elemX: number; marginLeft: number }>({
    startX: 0,
    elemX: positionX,
    marginLeft: 0,
  })
  const translateContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (translateContainer.current) {
      const containerStyles = getComputedStyle(translateContainer.current)

      touchVars.current.marginLeft = +containerStyles.marginLeft.slice(0, -2)
    }
  }, [])

  const translateHandler = (event) => {
    const diff = event.targetTouches[0].clientX - touchVars.current.startX
    const newPositon = touchVars.current.elemX + diff - touchVars.current.marginLeft - 25

    setPositionX(newPositon)
  }

  const touchStartHandler = (event) => {
    touchVars.current.startX = event.targetTouches[0].clientX

    touchVars.current.elemX = translateContainer.current!.getBoundingClientRect().left
  }
  return (
    <div
      className="container__scrollable"
      ref={translateContainer}
      onTouchStart={touchStartHandler}
      onTouchMove={translateHandler}
      style={{
        transform: `translateX(${positionX}px)`,
      }}
    >
      {children}
    </div>
  )
}

export default HorizontalScrollable
