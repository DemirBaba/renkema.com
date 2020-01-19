import React from "react"
import Intro from "../components/intro"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import CornerMotionOne from "../components/waveone"
import CornerMotionTwo from "../components/wavetwo"
import Projects from "../components/projects"
import Framer from "../components/framer"
import Footer from "../components/footer"
import useIsInViewport from "use-is-in-viewport"

// const IndexPage = () => (
//   <Layout>
//     <CornerMotionOne></CornerMotionOne>
//     <CornerMotionTwo></CornerMotionTwo>
//     <Intro></Intro>
//     <Bio></Bio>
//     <Framer></Framer>
//     <Projects></Projects>
//     <Scroller></Scroller>
//     <Footer></Footer>
//     <SEO title="Portfolio Viktor Renkema" />
//   </Layout>
// )

// export default IndexPage

export default function IndexPage(props) {
  return (
    <Layout>
      <CornerMotionOne></CornerMotionOne>
      <CornerMotionTwo></CornerMotionTwo>
      <Intro></Intro>
      <Bio></Bio>
      <Framer></Framer>
      <Projects></Projects>
      <Scroller></Scroller>
      <Footer></Footer>
      <SEO title="Viktor Renkema" />
    </Layout>
  )
}
