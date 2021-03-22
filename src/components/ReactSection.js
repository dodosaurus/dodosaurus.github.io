import React from 'react'

const ReactSection = () => {
    return (
        <>
            <nav className="flex h-20 px-5 m-1 mt-2 justify-center rounded-xl items-center gap-4 bg-eggshell shadow-xl">
                <span>
                    <h1 className="text-4xl font-bold">React Developer</h1>
                </span>
                <span>
                    <img className="w-14" src="icons/react.png" alt=""></img>
                </span>
            </nav>

            <section
                className="flex lg:flex-row flex-col flex-shrink items-center justify-center m-1 p-3 bg-terracotta-light rounded-xl z-0">
                <div
                    className="flex md:flex-row flex-col justify-around w-auto lg:w-1/2 p-3 m-2 bg-independence text-independence-text rounded-xl border-2 border-independence-text">
                    <div className="text-center m-2">
                        <h3 className="font-bold m-2">JS frameworks:</h3>
                        <ul>
                            <li><img className="w-8 mr-2 inline-block"src="./icons/logos/react.svg" alt=""></img>React</li>
                            <li><img className="w-7 mr-2 inline-block"src="./icons/logos/gatsby.svg" alt=""></img>Gatsby</li>
                        </ul>
                        <h3 className="font-bold m-2">CSS frameworks:</h3>
                        <ul>
                            <li><img className="w-8 mr-2 inline-block"src="./icons/logos/tailwindcss.svg" alt=""></img>Tailwind</li>
                            <li><img className="w-5 mr-2 inline-block"src="./icons/logos/bulma.svg" alt=""></img>Bulma</li>
                        </ul>
                        <h3 className="font-bold m-2">Backend platform:</h3>
                        <ul>
                            <li><img className="w-5 mr-2 inline-block"src="./icons/logos/firebase.svg" alt=""></img>Firebase</li>
                        </ul>
                    </div>
                    <div className="text-center m-2">
                        <h3 className="font-bold m-2">CMS:</h3>
                        <ul>
                            <li><img className="w-7 mr-2 inline-block"src="./icons/logos/contentful.svg" alt=""></img>Contentful</li>
                        </ul>
                        <h3 className="font-bold m-2">Other tooling I use(d):</h3>
                        <ul>
                            <li><img className="w-8 mr-2 inline-block"src="./icons/logos/vscode.svg" alt=""></img>VS Code</li>
                            <li><img className="w-8 mr-2 inline-block"src="./icons/logos/brackets.svg" alt=""></img>Brackets</li>
                            <li><img className="w-8 mr-2 inline-block"src="./icons/logos/github.svg" alt=""></img>Git(Hub)</li>
                        </ul>
                        <h3 className="font-bold m-2">Also related to this:</h3>
                        <ul>
                            <li><img className="w-8 mr-2 inline-block"src="./icons/logos/javascript.svg" alt=""></img>p5.js</li>
                        </ul>
                    </div>

                </div>

                <div
                    className="flex md:flex-row flex-col justify-around w-auto lg:w-1/2 p-5 m-2 bg-independence-text text-independence rounded-xl border-2 border-independence">
                    <div className="text-center m-2">   
                        <h3 className="italic mb-2">
                            <img className="hidden lg:inline-block w-9 mr-5 text-independence-text" src="icons/left-arrow.png" alt=""></img>
                            <img className="block lg:hidden w-9 mx-auto text-independence-text transform rotate-90" src="icons/left-arrow.png" alt=""></img>
                            (Click on tech to get more info.)
                        </h3>
                    </div>
                </div>
            </section>

            <section className="flex flex-col p-5 m-1 mb-3 bg-terracotta-light rounded-xl items-center">
                <div className="h-auto p-3 bg-chlebiatko-bg rounded-xl border-2 border-independence mb-2">
                    <div className="flex flex-col z-10 mt-32 rounded-xl bg-independence text-independence-text p-5">
                        <h3 className="font-bold mb-2">Chlebiatko Blog</h3>
                        <p className="mb-4 z-20">Little blogging platform for hobby baker. Web app was made from zero
                            without CMS. Frontend was created with React and Bulma, state management with
                            Redux and Thunk. Firebase and its modules are used as backend layer (authentication
                            handling, DB, storage and in this case also hosting).</p>
                        <a className="self-center px-4 pt-2 pb-2.5 text-center text-terracotta-light rounded-xl shadow-xl bg-terracotta"
                            href="https://chlebiatko-blog.web.app/">Visit the website</a>
                    </div>
                </div>
                <div className="w-full h-auto p-3 bg-dino-green rounded-xl border-2 border-independence mb-2">
                    <div className="flex flex-col z-10 rounded-xl bg-independence text-independence-text p-5">
                        <h3 className="font-bold mb-2">...this website</h3>
                        <p className="mb-2">Static site generator Gatsby used for logic layer (it is based on React), Contentful for storing and providing content. For styling I used Tailwind (and I love it). </p>
                        <a className="self-center px-4 pt-2 pb-2.5 text-center text-dino-yellow"
                            href="https://chlebiatko-blog.web.app/">Just look around, you don't need to leave this magnificient page.</a>
                    </div>
                </div>
                <p className="mt-1 text-independence">More to come...</p>
            </section>

            <div className="flex-grow"></div> 
        </>
    )
}

export default ReactSection
