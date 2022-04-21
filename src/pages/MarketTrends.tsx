import React, { useMemo } from 'react'
import axios from 'axios'
import _ from 'lodash'

import TrendRow from '../components/Row'
import { marketTrends, MarketTrendsProps } from '../config'
import styles from '../styles/landing.module.css'

const MarketTrends: React.FC<MarketTrendsProps> = (props) => {
  const { expanded } = props
  useMemo(async () => {
    // const res = await axios.get('https://api.coinlore.net/api/tickers', {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //     'Content-Type' : 'application/x-www-form-urlencoded',
    //   }
    // })
    // console.log(res)
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
        {_.map(_.filter(marketTrends, (x, i) => !expanded ? (i <= 3) : true), (x, i) => <TrendRow key={i} {...x} />)}
      </tbody>
    </table>
  )
}

export default MarketTrends