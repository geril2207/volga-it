import { ActionTypes, IMoveBack, ISetPage } from './actionTypes'
import { transitionsCurrentPage } from './reducer'

export const setPage = (page: transitionsCurrentPage): ISetPage => ({
  type: ActionTypes.SET_PAGE,
  payload: page,
})

export const moveBack = (): IMoveBack => ({
  type: ActionTypes.MOVE_BACK,
})
