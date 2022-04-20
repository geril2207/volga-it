import React from 'react'
import logoImg from 'assets/img/optimax-logo.png'
import arrowRightImg from 'assets/img/arrow-right.svg'
import exitImg from 'assets/img/exit.svg'
import backImg from 'assets/img/back.svg'
import styles from './Header.module.scss'
import { useSelector } from 'hooks/useSelector'
import { useDispatch } from 'hooks/useDispatch'
import { moveBack, setPage } from 'store/transitions/actions'
import { ITranstitionsStore, transitionsCurrentPage } from 'store/transitions/reducer'
import { resetValues } from 'store/params/actions'

const Header = () => {
  const { currentPage }: ITranstitionsStore = useSelector((state) => state.transitions)
  const dispatch = useDispatch()

  const displayPage = currentPage === 'm3' ? 3 : currentPage === 'm4' ? 4 : Math.floor(+currentPage)

  function changePageHandler(page: transitionsCurrentPage = 'start') {
    dispatch(setPage(page))
  }

  function toHomePageHandler() {
    dispatch(setPage('start'))
    dispatch(resetValues())
  }
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        {currentPage === 'start' ? (
          <>
            <img src={logoImg} alt="Логотип" />
            <img
              className={styles.arrow_next}
              src={arrowRightImg}
              alt="Далее"
              onClick={() => changePageHandler(1)}
            />
          </>
        ) : (
          <>
            <div className={styles.arrow_back_wrapper} onClick={() => dispatch(moveBack())}>
              <img src={backImg} alt="Назад" />
            </div>
            <div className="show_page">{displayPage} / 10</div>
            <div className={styles.exit} onClick={toHomePageHandler}>
              <img src={exitImg} alt="Закрыть" />
            </div>
          </>
        )}
      </div>
      {currentPage !== 'start' && (
        <div className={styles.page_line_wrapper}>
          <div className={styles.page_line} style={{ width: `${(displayPage * 100) / 11}%` }}></div>
        </div>
      )}
    </header>
  )
}

export default Header
