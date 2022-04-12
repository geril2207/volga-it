import React from 'react'
import welcomeImg from 'assets/img/welcome.png'
import styles from './StartPage.module.css'
import { useDispatch } from 'hooks/useDispatch'
import { setPage } from 'store/transitions/actions'

const StartPage = () => {
  const dispatch = useDispatch()

  function toNextPage() {
    dispatch(setPage(1))
  }
  return (
    <div className={styles.inner}>
      <img className={styles.img} src={welcomeImg} alt="Welcome" />
      <h4 className={styles.title}>Let's find your perfect pair!</h4>
      <div className={styles.text}>
        Take the quiz to easily discover your perfect fit from thousands of
        styles
      </div>
      <div className={styles.btn} onClick={toNextPage}>
        Start now
      </div>
    </div>
  )
}

export default StartPage
