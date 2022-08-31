// 📦 Packages
import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import useIsInViewport from "use-is-in-viewport"

// 🌱 Components
import Project from "./project"
import Link from "./link"
import { ArrowLink } from "./resources/icons"

// 🧰 Utils

// 🌀 Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
}

// 💅🏽 Styled Components
const Section = styled(motion.div)`
  width: 90%;
  align-self: center;
  padding: 4em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 767px) {
    padding: 4em 0em;
  }
`

const backToHomeStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: "20px",
  left: "20px",
  zIndex: "99",
  width: "40px",
  height: "40px",
  borderRadius: "8px",
  padding: "8px",
  border: "1px solid white",
}

export function ProjectsList(props) {
  const { dark } = props
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 10 })

  return (
    <>
      <Link
        text={""}
        title={"Return to homepage"}
        url={"/"}
        dark={true}
        external={false}
        style={backToHomeStyle}
        iconLeft
      ></Link>
      <Section>
        <Project
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
          ref={targetRef}
          variants={container}
          projectlabel={"web app"}
          projecttitle={"İBB YURT Otomasyon"}
          projectinfo={
            "İBB Yurt için yaptığımız otomasyon sistemi."
          }
          url={"https://yurt.ibb.istanbul/"}
          githuburl={"https://www.github.com/voice360"}
          project="loaders"
          id={"loaders"}
        ></Project>
        <Project
          assetBackgroundColor={"#fbf8f8"}
          projectlabel={"website"}
          projecttitle={"Ulaşım İstanbul"}
          projectinfo={
            "Ulaşım İstanbul için yaptığımız website"
          }
          project="ladimora"
          id={"ladimora"}
          url={"https://www.ulaşim.istanbul/"}
        ></Project>
        
      </Section>
    </>
  )
}
