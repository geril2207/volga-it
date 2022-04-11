import { ActionTypes } from './actionTypes'
import { KeysStoreTypes } from './reducer'

export const setValue = (type: KeysStoreTypes, value) => ({
  type: ActionTypes.SET_VALUE,
  payload: { [type]: value },
})
