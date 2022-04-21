import React from 'react'
import _ from 'lodash'

import { LinkGroupProps } from '../../config'
import styles from '../../styles/components.module.css'

const LinkGroup: React.FC<LinkGroupProps> = (props) => {
    const { title, links } = props
    return (
        <div className={styles.linkgroup}>
            <div>{title}</div>
            {_.map(links, (x, i) => <div key={i}>{x}</div>)}
        </div>
    )
}

export default LinkGroup