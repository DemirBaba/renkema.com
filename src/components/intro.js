import { motion } from "framer-motion"
import React from "react"
import useIsInViewport from "use-is-in-viewport"
import Link from "./link"
import Typed from "typed.js"

console.log(Typed)
const name_stagger = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const description_stagger = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

const reachout_stagger = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
}

export default function Introduction(props) {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 40 })

  const section = {
    hidden: { opacity: 0, transition: { duration: 1.3 } },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      strings: ["web development"],
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: 1000,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [])

  return (
    <motion.section
      className={"intro"}
      variants={section}
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
    >
      <motion.div className={"grid_intro container"}>
        <motion.div
          ref={targetRef}
          className={"name nameStagger"}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={name_stagger}>Hey, my name is Viktor.</motion.h1>
        </motion.div>
        <motion.div
          className="about descriptionStagger"
          variants={description_stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={name_stagger} className="copy-intro">
            Front-end developer with a background in psychology, exploring the
            field of design and
            <motion.span
              variants={name_stagger}
              style={{
                fontFamily: "'Roboto Mono', monospace",
                display: "inline",
                fontSize: "16px",
                marginLeft: "4px",
                paddingLeft: "2px",
                paddingRight: "2px",
                bottom: "3px",
                position: "relative",
                color: "white",
                background: "black",
              }}
              className="copy-intro"
              id="typedid"
              ref={el}
            ></motion.span>
          </motion.p>
          <motion.div
            variants={reachout_stagger}
            className="contactlinks"
            style={{ display: "flex", gap: 5 }}
          >
            <Link
              inline={true}
              text={"Twitter"}
              url={"https://www.twitter.com/vrenkema"}
            ></Link>{" "}
            <Link
              inline={true}
              text={"Linkedin"}
              url={"https://www.linkedin.com/in/viktor-renkema-7b3505133/"}
            ></Link>{" "}
            <Link
              inline={true}
              text={"Email"}
              url={"mailto:viktor@renkema.com"}
            ></Link>{" "}
            {/* to chat motorcycles, neurotransmitters, or anything, really. */}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
