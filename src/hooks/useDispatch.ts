import { useContext } from 'react'
import { Store } from 'store'

export const useDispatch = () => {
  const { dispatch } = useContext(Store)
  return dispatch
}
