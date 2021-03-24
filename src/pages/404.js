import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const NotFound = () => {
    return (
        <Layout>
            <section className="h-20 mt-20 text-center">
                <h3 className="text-independence-text">404 - Page not found (Let me walk you <Link className="font-bold hover:text-dino-yellow transition ease-linear duration-500" to='/'>Home</Link>)</h3>
            </section>
        </Layout>
    )
}

export default NotFound
