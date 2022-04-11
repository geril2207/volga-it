import React, { useContext } from 'react'
import logoImg from 'assets/img/optimax-logo.png'
import arrowRightImg from 'assets/img/arrow-right.svg'
import exitImg from 'assets/img/exit.svg'
import backImg from 'assets/img/back.svg'
import styles from './Header.module.css'
import { Store } from 'store'
import { useSelector } from 'hooks/useSelector'
import { useDispatch } from 'hooks/useDispatch'
import { setPage } from 'store/transitions/actions'
import { transitionsCurrentPage } from 'store/transitions/reducer'

const Header = () => {
  const currentPage: string | number = useSelector(
    (state) => state.transitions.currentPage
  )
  const dispatch = useDispatch()

  const displayPage = Math.floor(+currentPage)

  function changePageHandler(page: transitionsCurrentPage = 'start') {
    dispatch(setPage(page))
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
            <div className={styles.arrow_back_wrapper}>
              <img src={backImg} alt="Назад" />
            </div>
            <div className="show_page">{displayPage} / 10</div>
            <div
              className={styles.exit}
              onClick={() => changePageHandler('start')}
            >
              <img src={exitImg} alt="Закрыть" />
            </div>
          </>
        )}
      </div>
      {currentPage !== 'start' && (
        <div className={styles.page_line_wrapper}>
          <div
            className={styles.page_line}
            style={{ width: `${(displayPage * 100) / 11}%` }}
          ></div>
        </div>
      )}
    </header>
  )
}

export default Header
