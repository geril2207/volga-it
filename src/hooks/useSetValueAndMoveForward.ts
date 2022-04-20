import { glassesItemsValue } from 'components/Pages/Eighth/EighthPageItems'
import { setValue } from 'store/params/actions'
import { KeysStoreTypes } from 'store/params/reducer'
import { moveForward } from 'store/transitions/actions'
import { useDispatch } from './useDispatch'

const useSetValueAndMoveForward = () => {
  const dispatch = useDispatch()
  return (type: KeysStoreTypes, value: number | string | boolean | glassesItemsValue) => {
    dispatch(setValue(type, value))
    dispatch(moveForward())
  }
}
export default useSetValueAndMoveForward
