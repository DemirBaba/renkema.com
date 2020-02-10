import React from "react"
import { motion } from "framer-motion"
// import { useGlobal } from "reactn"

const chevron = {
  first: {
    d: "M 5 9 L 14 18 L 23 9",
  },
  second: {
    d: "M 5 18 L 14 9 L 23 9",
  },
  third: {
    d: "M 5 18 L 14 9 L 23 18",
  },
}

export default function Chevron() {
  // const [global, setGlobalState] = useGlobal()

  const [open, setOpen] = React.useState(false)

  return (
    <motion.div
      className="chevron"
      style={{
        bottom: "35px",
        position: "relative",
        zIndex: "3",
        width: "fit-content",
        display: "block",
        margin: "0 auto",
      }}
      onTap={() => {
        // setGlobalState(
        //   {
        //     accordion: !global.accordion,
        //   },
        //   console.log(global.accordion)
        // )
        open ? setOpen(false) : setOpen(true)
      }}
    >
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="27" height="27">
        <motion.path
          variants={chevron}
          initial={open ? "first" : "third"}
          animate={open ? "first" : "third"}
          // transition={mytransition}
          style={{
            strokeWidth: "2.5",
            stroke: "white",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            fill: "transparent",
          }}
        />
      </motion.svg>
    </motion.div>
  )
}
