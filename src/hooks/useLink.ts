import { IParamsStore } from 'store/params/reducer'
import { useSelector } from './useSelector'

export const useLink = () => {
  const appContainer: HTMLDivElement | null = document.querySelector('#glasses-quiz-widget')
  const sourceStr = appContainer!.dataset.source ?? '/'
  const params: IParamsStore = useSelector((state) => state.params)

  const resultLogger = () => {
    const result: string[] = []

    Object.entries(params).forEach((item) => {
      const [key, value] = item
      if (Array.isArray(value)) {
        if (!value.length) return
        const arrayValues: string[] = []
        value.forEach((item) => arrayValues.push(item))
        const str = `${key}=${arrayValues.join(',')}`
        return result.push(str)
      }
      if (value) {
        return result.push(`${key}=${value}`)
      }
    })
    const link = `${sourceStr}?${result.join('&')}`
    return console.log(`URL : [${link}]`)
  }
  return resultLogger
}
