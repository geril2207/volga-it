import { ActionTypes } from './actionTypes'
import { transitionsCurrentPage } from './reducer'

export const setPage = (page: transitionsCurrentPage) => ({
  type: ActionTypes.SET_PAGE,
  payload: page,
})
