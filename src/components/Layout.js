import React from 'react'
import { Link } from "gatsby"

const Layout = ( {children} ) => {
    return (
        <main className="flex flex-col h-screen bg-gradient-to-l from-black to-gray-500 text-white">
            <nav className="p-4 bg-black shadow-xl flex justify-between items-center border-b">
                <h1 className="text-2xl">Cool brand Yo!</h1>
                <ul className="font-semibold flex gap-6">
                    <Link to='/'><li>
                        <span className="">Home</span>
                    </li></Link>
                    <Link to='/projects'><li>
                        <span>Projects</span>
                    </li></Link>
                    <Link to='/about'><li>
                        <span>Contact & About</span>
                    </li></Link>
                </ul>
            </nav>
               <div className="mb-auto container-lg"> { children } </div>
            <footer className="p-5 bg-black border-t italic flex justify-center text-xl">
                <span>Made by JK @ {(new Date().getFullYear())}</span>
            </footer>
        </main>
    )
};

export default Layout

