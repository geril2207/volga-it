import { createContext } from 'react'
import paramsActionType from './params/actionTypes'
import { IParamsStore, paramsInitState, paramsReducer } from './params/reducer'
import transitionsActionType from './transitions/actionTypes'
import {
  ITranstitionsStore,
  transitionsInitState,
  transitionsReducer,
} from './transitions/reducer'

export interface IInitialStore {
  params: IParamsStore
  transitions: ITranstitionsStore
}

export const InitState: IInitialStore = {
  params: paramsInitState,
  transitions: transitionsInitState,
}

export const StoreContext = createContext<{
  state: IInitialStore
  dispatch: React.Dispatch<transitionsActionType | paramsActionType>
}>({
  state: InitState,
  dispatch: () => null,
})

export const storeReducer = ({ params, transitions }, action) => ({
  transitions: transitionsReducer(transitions, action),
  params: paramsReducer(params, action),
})

export default StoreContext
