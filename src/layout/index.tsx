import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'
import { LayoutProps } from '../config'

const Layout: React.FC<LayoutProps> = (props) => {
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