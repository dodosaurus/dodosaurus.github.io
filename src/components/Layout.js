import React from 'react'

const Layout = ({ children }) => {
    return (
        <main className="bg-independence font-sans"> 
            <div className="md:container md:mx-auto flex flex-col min-h-screen text-xl font-light">
            
                {children}

                <footer className="flex lg:flex-row flex-col min-h-20 p-5 justify-between items-center bg-independence">
                    <span>
                        <p className="text-independence-text text-xl font-light">(Sorry for the colors, I am not a designer.)</p>
                    </span>
                    <img className="w-20" src="icons/dino.png" alt=""></img>
                    <span>
                        <p className="text-independence-text text-xl font-light">Click the dinosaur, to get my contact info.</p>
                    </span>
                </footer>
            </div>
        </main>
    )
}

export default Layout
