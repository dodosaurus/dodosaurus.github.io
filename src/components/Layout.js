import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ( {children} ) => {
    return (
        <main className="min-h-screen bg-eggshell">
            <Navbar />
                { children }
            <Footer />
        </main>
    )
};

export default Layout

