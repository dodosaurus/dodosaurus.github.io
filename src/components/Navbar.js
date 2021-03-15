import React from 'react'

const Navbar = () => {
    
    return (       
        <nav className="flex items-center justify-end w-screen h-16 border-b text-independence">
            <ul className="flex gap-5 py-5 mx-7">
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
