import { useSkipPage } from 'hooks/useSkipPage'
import React from 'react'
import { transitionsCurrentPage } from 'store/transitions/reducer'

interface IBottomLink {
  textContent: string
  toPage?: transitionsCurrentPage | null
}

const BottomLink = ({ textContent, toPage }: IBottomLink) => {
  const skipPageHandler = useSkipPage(toPage)
  return (
    <div className="bottom_link" onClick={skipPageHandler}>
      {textContent}
    </div>
  )
}

export default BottomLink
