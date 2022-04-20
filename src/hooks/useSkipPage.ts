import { setValue } from 'store/params/actions'
import { setPage, moveForward } from 'store/transitions/actions'
import { transitionsCurrentPage } from 'store/transitions/reducer'
import { useDispatch } from './useDispatch'
import { useSelector } from './useSelector'

const pagesToValues = {
  1: 'gender',
  2: 'eyewear_type',
  3.2: 'lenstype',
  4: 'frame_size',
  4.2: 'frame_size',
  5: 'blue_light',
  6: 'face_shape',
  7: 'facial_features',
}

export const useSkipPage = (toPage: transitionsCurrentPage | null = null) => {
  const currentPage = useSelector((state) => state.transitions.currentPage)
  const dispatch = useDispatch()

  const skipPageHandler = () => {
    if (currentPage === 8 || currentPage === 10 || currentPage === 11) return
    if (pagesToValues[currentPage]) dispatch(setValue(pagesToValues[currentPage], null))
    if (currentPage === 9) return dispatch(setPage(11))
    if (currentPage === 4) return dispatch(setPage('m4'))
    dispatch(toPage ? setPage(toPage) : moveForward())
  }
  return skipPageHandler
}
