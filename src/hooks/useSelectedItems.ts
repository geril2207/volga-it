import { useState } from 'react'

export const useSelectedItems = <Item>(
  initValues: Item[]
): [Item[], (value: Item) => () => void] => {
  const [selectedItems, setSelectedItems] = useState(initValues)

  const selectItemHandler = (value: Item) => () => {
    const isValueExists = selectedItems.includes(value)
    if (isValueExists)
      return setSelectedItems((prevState) => prevState.filter((item) => item !== value))
    return setSelectedItems((prevState) => [...prevState, value])
  }
  return [selectedItems, selectItemHandler]
}
