import React from "react"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <section className="m-5">
        <h3>Welcome to JK Gatsby Playground</h3>
        <p>Skuska paragrafu v gatsbyovi</p>
        <figure className="m-3 border-black">
          <img src="/pexels-rodolfo-clix-1036936.jpg" alt="Lightbulbs on strings"/>
        </figure>
      </section>
    </Layout>
  )
}

export default Home
