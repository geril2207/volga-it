import { transitionsCurrentPage } from './reducer'

export enum ActionTypes {
  SET_PAGE = 'SET_PAGE',
  MOVE_BACK = 'MOVE_BACK',
  MOVE_FORWARD = 'MOVE_FORWARD',
}

export interface IMoveBack {
  type: ActionTypes.MOVE_BACK
}
export interface IMoveForward {
  type: ActionTypes.MOVE_FORWARD
}

export interface ISetPage {
  type: ActionTypes.SET_PAGE
  payload: transitionsCurrentPage
}

type transitionsActionType = ISetPage | IMoveBack | IMoveForward
export default transitionsActionType
