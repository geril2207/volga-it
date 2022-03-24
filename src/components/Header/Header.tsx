import React from 'react'
import logoImg from 'assets/img/optimax-logo.png'
import arrowRightImg from 'assets/img/arrow-right.svg'
import exitImg from 'assets/img/exit.svg'
import backImg from 'assets/img/back.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        {/* <img src={logoImg} alt="Логотип" />
        <img className={styles.arrow_next} src={arrowRightImg} alt="Далее" /> */}
        <div className="arrow_back_wrapper">
          <img src={backImg} alt="Назад" />
        </div>
        <div className="show_page">1 / 10</div>
        <div className="exit">
          <img src={exitImg} alt="Закрыть" />
        </div>
      </div>
      <div className={styles.page_line_wrapper}>
        <div className={styles.page_line}></div>
      </div>
    </header>
  )
}

export default Header
