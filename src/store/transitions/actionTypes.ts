import { transitionsCurrentPage } from './reducer'

export enum ActionTypes {
  SET_PAGE = 'SET_PAGE',
}

export interface ISetPage {
  type: ActionTypes.SET_PAGE
  payload: transitionsCurrentPage
}

type ActionType = ISetPage
export default ActionType
