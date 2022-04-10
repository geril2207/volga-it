import { createContext } from 'react'
import {
  IParamsInitStore,
  paramsInitState,
  paramsReducer,
} from './params/reducer'
import {
  ITranstitionsStore,
  transitionsInitState,
  transitionsReducer,
} from './transitions/reducer'

interface IInitialStore {
  params: IParamsInitStore
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

export const storeReducer = ({ params, transitions }, action: any) => ({
  params: paramsReducer(params, action),
  transitions: transitionsReducer(transitions, action),
})

export default StoreContext
