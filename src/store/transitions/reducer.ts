import transitionsActionType, { ActionTypes } from './actionTypes'

export type transitionsCurrentPage = number | 'start'

export interface ITranstitionsStore {
  currentPage: transitionsCurrentPage
  previousPage: transitionsCurrentPage[]
  moveTo: 'back' | 'next'
}

export const transitionsInitState: ITranstitionsStore = {
  currentPage: 10,
  previousPage: [],
  moveTo: 'next',
}

export const transitionsReducer = (
  state = transitionsInitState,
  action: transitionsActionType
) => {
  switch (action.type) {
    case ActionTypes.SET_PAGE:
      const previousPage =
        action.payload === 'start'
          ? []
          : [...state.previousPage, state.currentPage]
      return {
        ...state,
        previousPage,
        currentPage: action.payload,
      }
    case ActionTypes.MOVE_BACK:
      const prevPages = state.previousPage.slice(
        0,
        state.previousPage.length - 1
      )
      return {
        ...state,
        previousPage: prevPages,
        currentPage: state.previousPage[state.previousPage.length - 1],
      }
    default:
      return state
  }
}
