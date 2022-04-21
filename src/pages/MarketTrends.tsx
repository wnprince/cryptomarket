import React from 'react'
import _ from 'lodash'

import TrendRow from '../components/Row'
import styles from '../styles/landing.module.css'
import { marketTrends } from '../config'

const MarketTrends: React.FC = () => {
  return (
    <table className={styles.trendtable}>
      <thead>
        <th>Name</th>
        <th>Last Price</th>
        <th>Change</th>
        <th>Market cap</th>
      </thead>
      <tbody>
        {_.map(marketTrends, x => <TrendRow {...x} />)}
      </tbody>
    </table>
  )
}

export default MarketTrends