import { KeysStoreTypes } from 'store/params/reducer'
import { glassesItemsValue } from './Eighth/EighthPageItems'

export interface IPage {
  dispatch: (type: KeysStoreTypes, value: string | number | boolean | glassesItemsValue) => void
}
