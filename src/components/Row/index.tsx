import React from 'react'
import classnames from 'classnames'

import styles from '../../styles/components.module.css'

interface Props {
    name: string
    symbol: string
    lastPrice: string
    marketcap: string
    change: number
}

const Row: React.FC<Props> = (props) => {
    const { name, symbol, lastPrice, marketcap, change } = props
    return (
        <tr className={styles.row}>
            <td>
                <div>B</div>
                <div>{name}</div>
                <div>{symbol}</div>
            </td>
            <td>{lastPrice}</td>
            <td className={classnames(styles[change > 0 ? 'success' : 'error'])}>{change > 0 ? '+' : '-'}{change}%</td>
            <td>{marketcap}</td>
        </tr>
    )
}

export default Row