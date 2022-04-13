import { KeysStoreTypes } from 'store/params/reducer'

export interface IFifthGlasses {
  clickHandler: (
    type: KeysStoreTypes,
    value: boolean | 'dark' | 'light' | 'transition'
  ) => () => void
}
