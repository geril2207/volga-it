import ActionType, { ActionTypes } from './actionTypes'

export interface IParamsStore {
  gender: 4 | 5 | null
  eyewear_type: 210 | 211 | null
  lenstype: 6 | 7 | null
  frame_size: 68 | 67 | 66 | null
  blue_light: boolean
  shade: 'dark' | 'ligth' | 'transition' | null
  face_shape: 'long' | 'round' | 'between' | null
  facial_features: 'sharp' | 'rounded' | 'between' | null
  shape: string | null
  brand: string | null
}

export type KeysStoreTypes = keyof IParamsStore

export const paramsInitState: IParamsStore = {
  gender: null,
  eyewear_type: null,
  lenstype: null,
  shade: null,
  frame_size: null,
  blue_light: false,
  facial_features: null,
  shape: null,
  face_shape: null,
  brand: null,
}

export const paramsReducer = (state = paramsInitState, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.SET_VALUE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
