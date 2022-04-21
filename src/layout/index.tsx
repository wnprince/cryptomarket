import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'

interface Props {
    children?: any
}

const Layout: React.FC<Props> = (props) => {
    const { children } = props
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout