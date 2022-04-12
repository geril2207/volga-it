import transitionsActionType, { ActionTypes } from './actionTypes'

export type transitionsCurrentPage = number | 'start'
export type transitionsMoveTo = 'back' | 'next'
export interface ITranstitionsStore {
  currentPage: transitionsCurrentPage
  previousPage: transitionsCurrentPage[]
  moveTo: transitionsMoveTo
}

export const transitionsInitState: ITranstitionsStore = {
  currentPage: 'start',
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
      const moveToNext: transitionsMoveTo =
        action.payload === 'start' ? 'back' : 'next'
      return {
        ...state,
        moveTo: moveToNext,
        previousPage,
        currentPage: action.payload,
      }
    case ActionTypes.MOVE_BACK:
      const moveToBack: transitionsMoveTo = 'back'
      const currentPage: transitionsCurrentPage = 'start'
      if (!state.previousPage.length) {
        return {
          ...state,
          currentPage,
          moveTo: moveToBack,
          previousPage: [],
        }
      }
      const prevPages = state.previousPage.slice(
        0,
        state.previousPage.length - 1
      )

      return {
        ...state,
        moveTo: moveToBack,
        previousPage: prevPages,
        currentPage: state.previousPage[state.previousPage.length - 1],
      }
    default:
      return state
  }
}
