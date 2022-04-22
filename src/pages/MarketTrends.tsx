import React, { useMemo, useState } from 'react'
import axios from 'axios'
import _ from 'lodash'

import TrendRow from '../components/Row'
import { MarketTrendsProps } from '../config'
import styles from '../styles/landing.module.css'

const MarketTrends: React.FC<MarketTrendsProps> = (props) => {
  const { expanded } = props
  const [coinList, setCoinList] = useState([])
  useMemo(async () => {
    const res = await axios.get('https://api.coinlore.net/api/tickers')
    setCoinList(res.data.data)
  }, [])
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
        {_.map(_.filter(coinList, (x, i) => !expanded ? (i <= 3) : true), (x, i) => <TrendRow key={i} {...x} />)}
      </tbody>
    </table>
  )
}

export default MarketTrends