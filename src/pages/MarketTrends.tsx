import React from 'react'
import _ from 'lodash'

import TrendRow from '../components/Row'
import styles from '../styles/landing.module.css'
import { marketTrends } from '../config'

interface Props {
  expanded: boolean
}

const MarketTrends: React.FC<Props> = (props) => {
  const { expanded } = props
  return (
    <table className={styles.trendtable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Price</th>
          <th>Change</th>
          <th>Market cap</th>
        </tr>
      </thead>
      <tbody>
        {_.map(_.filter(marketTrends, (x, i) => !expanded ? (i <= 3) : true), (x, i) => <TrendRow key={i} {...x} />)}
      </tbody>
    </table>
  )
}

export default MarketTrends