import React from 'react'

import MarketTrends from './MarketTrends'
import NextGenerations from './NextGenerations'
import Button from '../components/Button'
import PhoneImg from '../assets/images/phone.png'
import styles from '../styles/landing.module.css'

const Landing: React.FC = () => {
  return (
    <div>
      <div className={styles.introduce}>
        <div>Create the next generation crypto exchange website.</div>
        <img src={PhoneImg} alt='' />
      </div>
      <div className={styles.trends}>
        <div>Market trends</div>
        <MarketTrends />
        <div>
          <Button>More</Button>
        </div>
      </div>
      <NextGenerations />
      <div className={styles.getstarted}>
        <div>Start today. Easly</div>
        <Button variant='lg'>Get started</Button>
      </div>
    </div>
  )
}

export default Landing