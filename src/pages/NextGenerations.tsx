import React from 'react'

import Card from '../components/Card'
import styles from '../styles/landing.module.css'

const NextGenerations: React.FC = () => {
  return (
    <div className={styles.generations}>
      <div>Create the next generation crypto exchange website.</div>
      <div>Created with Figma and Anima. No coding involved.</div>
      <div className={styles.futurerow}>
        <Card
          title='Awesome feature'
          description='Fill in the details with a clear description of your feature.'
        />
        <Card
          title='Awesome feature'
          description='Fill in the details with a clear description of your feature.'
        />
        <Card
          title='Awesome feature'
          description='Fill in the details with a clear description of your feature.'
        />
      </div>
    </div>
  )
}

export default NextGenerations