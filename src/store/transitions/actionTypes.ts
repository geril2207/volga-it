import { transitionsCurrentPage } from './reducer'

export enum ActionTypes {
  SET_PAGE = 'SET_PAGE',
  MOVE_BACK = 'MOVE_BACK',
}

export interface IMoveBack {
  type: ActionTypes.MOVE_BACK
}

export interface ISetPage {
  type: ActionTypes.SET_PAGE
  payload: transitionsCurrentPage
}

type transitionsActionType = ISetPage | IMoveBack
export default transitionsActionType
