import ActionType, { ActionTypes } from './actionTypes'

export type transitionsCurrentPage = number | 'start'

export interface ITranstitionsStore {
  currentPage: transitionsCurrentPage
  previousPage: transitionsCurrentPage
  moveTo: 'back' | 'next'
}

export const transitionsInitState: ITranstitionsStore = {
  currentPage: 10,
  previousPage: 'start',
  moveTo: 'next',
}

export const transitionsReducer = (
  state = transitionsInitState,
  action: ActionType
) => {
  switch (action.type) {
    case ActionTypes.SET_PAGE:
      return {
        ...state,
        previousPage: state.currentPage,
        currentPage: action.payload,
      }
    default:
      return state
  }
}
