import React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/Layout"
import ProjectsSection from "../components/ProjectsSection"
import SkillsSection from "../components/SkillsSection"

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </Layout>
  )
}

export default Home
