export enum ActionTypes {
  SET_VALUE = 'SET_VALUE',
}

export interface ISetValue {
  type: ActionTypes.SET_VALUE
  payload: any
}

type ActionType = ISetValue
export default ActionType
