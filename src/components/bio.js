import React from "react"
import useIsInViewport from "use-is-in-viewport"
import Groningen from "../../src/images/groningen.jpeg"
import { motion } from "framer-motion"

const image = {
  default: {
    scale: 1,
  },
  hovered: {
    scale: 1.05,
  },
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}
const header = {
  hidden: { y: -20, opacity: 0, transition: { duration: 1.3 } },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

const copy = {
  hidden: { y: 20, opacity: 0, transition: { duration: 1.3 } },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

const section = {
  hidden: { opacity: 0, transition: { duration: 1.3 } },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const learnmore_separator = {
  hidden: {
    width: "30%",
  },
  visible: {
    width: "100%",
  },
}

export default function Background(props) {
  const [hovered, setHovered] = React.useState(false)

  const onHoverStart = () => {
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 40 })

  return (
    <motion.section
      ref={targetRef}
      className="bio"
      variants={section}
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
    >
      <div className="grid grid--bio">
        <motion.div
          variants={image}
          className="imagecard imgleft"
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
        >
          <PictureFrame></PictureFrame>
        </motion.div>
        <motion.div
          style={{
            flexDirection: "column",
            opacity: "1",
            transform: "none",
            display: "flex",
            placeContent: "start",
          }}
        >
          <motion.h1
            className={"subject subject-bio header"}
            variants={header}
            initial="hidden"
            animate={isInViewport ? "visible" : "hidden"}
          >
            Bio
          </motion.h1>
          <motion.div className="description carddescriptionright">
            <motion.p
              className="copy"
              variants={copy}
              initial="hidden"
              animate={isInViewport ? "visible" : "hidden"}
            >
              While obtaining my Master's degree in Psychology in Groningen, my
              interest in human behaviour started to extend to include the
              combination of behaviour and web technology. To pursue this field,
              I began learning more about web development and digital user
              experiences.
              <br></br>
              <br></br>After starting out learning about web technologies
              creating A/B tests for an online webshop. After this, I got to
              learn more about the UX side when I started working at the Medical
              Center Groningen. I studied the workflows of medical staff for
              whom we built and implemented custom user interfaces in Epic, the
              hospital-wide electronic medical record.
              <br></br>
              {/* <br></br>About a year later I started working at Framer, where I
            manage our thriving communities and ensure all our users and
            organizations are receiving the technical support they require. */}
            </motion.p>
            <motion.a
              className="learnmore copy"
              href="mailto:viktor@renkema.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={copy}
              initial="hidden"
              animate={isInViewport ? "visible" : "hidden"}
              onHoverStart={onHoverStart}
              onHoverEnd={onHoverEnd}
            >
              ASK ME MORE ›
              <motion.div
                className="learnmore_separator"
                variants={learnmore_separator}
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
              ></motion.div>
            </motion.a>
          </motion.div>
        </motion.div>{" "}
      </div>
    </motion.section>
  )
}

function PictureFrame(props) {
  const [isInViewportImg, targetRef] = useIsInViewport({ threshold: 30 })

  const [, setHovered] = React.useState(false)

  const onHoverStart = () => {
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }

  return (
    <motion.img
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      variants={image}
      ref={targetRef}
      initial="hidden"
      animate={isInViewportImg ? "visible" : "hidden"}
      className="img-groningen image"
      src={Groningen}
      width={"100%"}
      height="100%"
    ></motion.img>
  )
}
