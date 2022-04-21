import React from 'react'

import { CardProps } from '../../config'
import styles from '../../styles/components.module.css'

const Card: React.FC<CardProps> = (props) => {
    const { title, description } = props
    return (
        <div className={styles.card}>
            <div />
            <div>{title}</div>
            <div>{description}</div>
            <button>Learn more</button>
        </div>
    )
}

export default Card