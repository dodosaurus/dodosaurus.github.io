import React from 'react'

const LandingPage = () => {
    return (
        <>
            <nav class="flex h-20 justify-center items-center">
                <span>
                    <img class="w-9 md:w-14 m-3 inline-block" src="icons/down-arrow.png" alt=""></img>
                    <p class="inline-block text-independence-text text-xl font-light">Choose the part of my brain</p>
                    <img class="w-9 md:w-14 m-3 inline-block" src="icons/down-arrow.png" alt=""></img>
                </span>
            </nav>

            <section class="flex flex-grow lg:flex-row flex-col items-center justify-center h-auto p-5">

                <div class="relative flex flex-col items-center w-1/2 mx-3">
                    <div class="absolute h-64 w-100 m-10 bg-terracotta rounded-lg shadow-xl transform rotate-12 z-0"></div>
                    <figure class="flex flex-col flex-shrink-0 items-center h-64 w-100 m-10 bg-eggshell rounded-lg shadow-xl z-10 hover:bg-terracotta-light cursor-pointer">
                        <img class="w-32 m-5" src="icons/react.png" alt=""></img>
                        <h3 class="text-4xl font-bold">React Developer</h3>
                    </figure>
                </div>

                <div class="relative flex flex-col items-center w-1/2 mx-3">
                    <div class="absolute h-64 w-100 m-10 bg-greensheen rounded-lg shadow-xl transform -rotate-12 z-0"></div>
                    <figure class="flex flex-col flex-shrink-0 items-center h-64 w-100 m-10 bg-eggshell rounded-lg shadow-xl z-10 hover:bg-greensheen-light cursor-pointer">
                        <img class="w-32 m-5" src="icons/robot.png" alt=""></img>
                        <h3 class="text-4xl font-bold">Automation Engineer</h3>
                    </figure>
                </div>

            </section>  
        </>
    )
}

export default LandingPage
