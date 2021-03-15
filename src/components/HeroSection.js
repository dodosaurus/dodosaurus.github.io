import React from "react"

const HeroSection = () => {
  return (
    <section className="relative lg:flex justify-between">
  
    <div className="w-1/2 border border-black">
      <div className="w-96 h-96 m-14 p-5 bg-white shadow-md rounded-xl">
        <h3>R</h3>
      </div>
    </div>

    <div className="w-1/2 border border-black">
      <div className="w-96 h-96 m-14 p-5 bg-white shadow-md rounded-xl">
        <h3>T</h3>
      </div>
    </div>
    </section>
  )
}

export default HeroSection
