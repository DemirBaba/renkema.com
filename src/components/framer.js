import React from "react"
import useIsInViewport from "use-is-in-viewport"
import { motion } from "framer-motion"
import framerlogo from "../../src/images/framerlogo.png"

const image = {
  default: {
    scale: 1,
  },
  hovered: {
    scale: 1.05,
  },
  hidden: {
    x: 20,
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
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

const imagebackground = {
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

export default function Framer(props) {
  const [hovered, setHovered] = React.useState(false)

  const onHoverStart = () => {
    setHovered(true)
  }

  const onHoverEnd = () => {
    setHovered(false)
  }

  const [isInViewport, targetRef] = useIsInViewport({ threshold: 40 })

  return (
    <section className="framer" ref={targetRef}>
      <div className="grid grid--framer">
        <motion.h1
          className="subject subject-framer header"
          variants={header}
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
        >
          Framer
        </motion.h1>
        <motion.div className="description carddescriptionleft">
          <motion.p
            className="copy"
            variants={copy}
            initial="hidden"
            animate={isInViewport ? "visible" : "hidden"}
          >
            Starting out at Framer, as Community and Support Specialist I
            ensured our users are getting the support they required. Next to
            providing direct help via our support channels I wrote support
            articles, created community posts with tips and tricks, and assisted
            users with organising meetups in their local communities.
            <br></br>
            <br></br>
            Currently I moved into the Product Specialist role, where my focus
            extends to also help organizations like KLM, Google, and others
            become succesful, effective teams that excel with Framer as their
            prototyping resource, for instance with on-site workshops.
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            iaculis venenatis risus non rutrum. Phasellus ut pharetra massa. Nam
            elementum tellus venenatis sapien venenatis, sed pulvinar neque
            malesuada. Etiam eu ante id lacus interdum sagittis. Nullam ex eros,
            accumsan eget lacus a, vehicula accumsan libero. Ut eget lorem et
            felis scelerisque consectetur. */}
          </motion.p>{" "}
          <motion.a
            class="learnmore copy"
            href="https://www.framer.com"
            target="_blank"
            variants={copy}
            initial="hidden"
            animate={isInViewport ? "visible" : "hidden"}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
          >
            VISIT FRAMER.COM ›
            <motion.div
              className="learnmore_separator"
              variants={learnmore_separator}
              initial="hidden"
              animate={hovered ? "visible" : "hidden"}
            ></motion.div>
          </motion.a>
        </motion.div>
        <motion.div
          className="imgright imagecard"
          variants={imagebackground}
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
        >
          <FramerImg></FramerImg>
        </motion.div>
      </div>
    </section>
  )
}

function FramerImg(props) {
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
      className="img-framer image"
      src={framerlogo}
      width={"100%"}
      height="100%"
    ></motion.img>
  )
}
