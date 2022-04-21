import React from 'react'

import styles from '../../styles/components.module.css'

interface Props {
    title: string
    description: string
}

const Card: React.FC<Props> = (props) => {
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