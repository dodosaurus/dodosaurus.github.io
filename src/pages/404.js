import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const NotFound = () => {
    return (
        <Layout>
            <section>
                <h3 className="text-independence-text">404 - Page not found (Let me walk you <Link to='/index.html'>Home</Link>)</h3>
            </section>
        </Layout>
    )
}

export default NotFound
