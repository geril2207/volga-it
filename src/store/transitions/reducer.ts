export interface ITranstitionsStore {
  currentPage: number | 'start'
  moveTo: 'back' | 'next'
}

export const transitionsInitState: ITranstitionsStore = {
  currentPage: 2,
  moveTo: 'next',
}

export const transitionsReducer = (state = transitionsInitState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
