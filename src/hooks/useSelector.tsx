import { useContext } from 'react'
import { Store } from 'store'
import { IInitialStore } from 'store/context'

export const useSelector = (
  selector: (state: IInitialStore) => void = (state) => state
): any => {
  const { state } = useContext(Store)
  return selector(state)
}
