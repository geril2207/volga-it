import { ActionTypes, IResetValues, ISetValue } from './actionTypes'
import { KeysStoreTypes } from './reducer'

export const setValue = (
  type: KeysStoreTypes,
  value: string | number | boolean | null
): ISetValue => ({
  type: ActionTypes.SET_VALUE,
  payload: [type, value],
})

export const resetValues = (): IResetValues => ({
  type: ActionTypes.RESET_VALUES,
})
