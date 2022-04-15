import React, { useRef, useState } from 'react'

const HorizontalScrollable: React.FC = ({ children }) => {
  const [positionX, setPositionX] = useState(0)

  const touchVars = useRef<{ startX: number; elemX: number }>({
    startX: 0,
    elemX: positionX,
  })
  const translateContainer = useRef<HTMLDivElement>(null)

  const translateHandler = (event) => {
    const diff = event.targetTouches[0].clientX - touchVars.current.startX
    const newPositon = touchVars.current.elemX + diff
    setPositionX(newPositon)
  }

  const touchStartHandler = (event) => {
    touchVars.current.startX = event.targetTouches[0].clientX
    touchVars.current.elemX =
      translateContainer.current!.getBoundingClientRect().left
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
