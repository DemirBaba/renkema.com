// 📦 Packages
import React from "react"

// 🌱 Components
import LayoutComponent from "../components/resources/Layout"
import { ProjectsList } from "../components/Projects"
import Navigation from "../components/Nav"

// 🧰 Utils
import { Helmet } from "react-helmet"

// 🌀 Variants

// 💅🏽 Styled Components

export default function Me() {
  return (
    <LayoutComponent dark>
      <Helmet></Helmet>
      <Navigation current="projects" dark></Navigation>
      <ProjectsList dark></ProjectsList>
    </LayoutComponent>
  )
}
