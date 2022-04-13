export enum ActionTypes {
  SET_VALUE = 'SET_VALUE',
  RESET_VALUES = 'RESET_VALUES',
}

export interface ISetValue {
  type: ActionTypes.SET_VALUE
  payload: any
}

export interface IResetValues {
  type: ActionTypes.RESET_VALUES
}
type paramsActionType = ISetValue | IResetValues
export default paramsActionType
