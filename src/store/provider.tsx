import { useReducer } from 'react'
import { InitState, storeReducer, StoreContext } from './context'

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, InitState)
  // useEffect(() => {
  //   dispatch(setValue('gender', null))
  // }, [])
  // useEffect(() => {
  //   console.log(state)
  // }, [state])

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

export default StoreProvider
