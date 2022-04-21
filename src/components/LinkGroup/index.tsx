import React from 'react'
import _ from 'lodash'

import styles from '../../styles/components.module.css'

interface Props {
    title: string
    links: Array<string>
}

const LinkGroup: React.FC<Props> = (props) => {
    const { title, links } = props
    return (
        <div className={styles.linkgroup}>
            <div>{title}</div>
            {_.map(links, (x, i) => <div key={i}>{x}</div>)}
        </div>
    )
}

export default LinkGroup