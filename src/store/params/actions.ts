import { ActionTypes, IResetValues } from './actionTypes'
import { KeysStoreTypes } from './reducer'

export const setValue = (type: KeysStoreTypes, value) => ({
  type: ActionTypes.SET_VALUE,
  payload: { [type]: value },
})

export const resetValues = (): IResetValues => ({
  type: ActionTypes.RESET_VALUES,
})
