import React from 'react'
import logoImg from 'assets/img/optimax-logo.png'
import arrowRightImg from 'assets/img/arrow-right.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <img src={logoImg} alt="Логотип" />
        <img className={styles.arrow_next} src={arrowRightImg} alt="Далее" />
      </div>
    </header>
  )
}

export default Header
