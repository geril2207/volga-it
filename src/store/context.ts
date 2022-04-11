import { createContext } from 'react'
import { IParamsStore, paramsInitState, paramsReducer } from './params/reducer'
import {
  ITranstitionsStore,
  transitionsInitState,
  transitionsReducer,
} from './transitions/reducer'

export interface IInitialStore {
  params: IParamsStore | void // TODO Понять откуда взялся void
  transitions: ITranstitionsStore
}

interface IStoreContext {
  state: IInitialStore
  dispatch: React.Dispatch<any>
}

export const InitState: IInitialStore = {
  params: paramsInitState,
  transitions: transitionsInitState,
}

export const StoreContext = createContext<IStoreContext>({
  state: InitState,
  dispatch: () => null,
})

export const storeReducer = ({ params, transitions }, action) => ({
  transitions: transitionsReducer(transitions, action),
  params: paramsReducer(params, action),
})

export default StoreContext
