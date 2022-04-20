import transitionsActionType, { ActionTypes } from './actionTypes'

export type transitionsCurrentPage = number | 'start' | 'm3' | 'm4'
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

const nextPage = (currentPage: transitionsCurrentPage): transitionsCurrentPage => {
  switch (currentPage) {
    case 'start':
      return 1
    case 2:
      return 'm3'
    case 'm3':
      return 3
    case 'm4':
      return 4.2
    default:
      break
  }
  if (typeof currentPage === 'number') return Math.floor(currentPage + 1)
  return 'start'
}

export const transitionsReducer = (state = transitionsInitState, action: transitionsActionType) => {
  switch (action.type) {
    case ActionTypes.SET_PAGE:
      const previousPage =
        action.payload === 'start' ? [] : [...state.previousPage, state.currentPage]
      const moveToNext: transitionsMoveTo = action.payload === 'start' ? 'back' : 'next'
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
      const prevPages = state.previousPage.slice(0, state.previousPage.length - 1)

      return {
        ...state,
        moveTo: moveToBack,
        previousPage: prevPages,
        currentPage: state.previousPage[state.previousPage.length - 1],
      }
    case ActionTypes.MOVE_FORWARD:
      const moveTo: transitionsMoveTo = 'next'
      const previousPages =
        state.currentPage === 'm3' || state.currentPage === 'm4'
          ? [...state.previousPage]
          : [...state.previousPage, state.currentPage]
      return {
        ...state,
        moveTo,
        previousPage: previousPages,
        currentPage: nextPage(state.currentPage),
      }
    default:
      return state
  }
}
