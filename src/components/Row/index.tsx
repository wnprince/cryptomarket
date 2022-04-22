import React from 'react'
import classnames from 'classnames'

import { TrendRowProps } from '../../config'
import styles from '../../styles/components.module.css'

const Row: React.FC<TrendRowProps> = (props) => {
    const { name, symbol, price_usd: lastPrice, market_cap_usd: marketcap, percent_change_1h: change } = props
    return (
        <tr className={styles.row}>
            <td>
                <div>B</div>
                <div>{name}</div>
                <div>{symbol}</div>
            </td>
            <td>${parseFloat(lastPrice)}</td>
            <td className={classnames(styles[parseFloat(change) > 0 ? 'success' : 'error'])}>{parseFloat(change) > 0 ? '+' : ''}{change}%</td>
            <td>${parseFloat(marketcap)}</td>
        </tr>
    )
}

export default Row