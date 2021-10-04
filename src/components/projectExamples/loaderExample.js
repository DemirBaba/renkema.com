// 📦 Packages
import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from "styled-components"
import Input from "../../components/input"
import Loader from "../../components/loader"
import { generateCodeSnippet } from "./generateCode"
import CodeBlock from "./codeSnippet"

// 🧰 Utils
// import { palette } from "../../style/palette"

// 💅🏽 Styled Components
const DemoLoaders = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
`

const Label = styled(motion.span)`
  font-size: 10px;
  color: white;
  opacity: 0.6;
  margin-bottom: 0.25rem;
  font-family: Open Sans;
  text-transform: uppercase;
  font-weight: 500;
`

const Notice = styled(motion.span)`
  font-family: Open Sans;
  font-weight: 500;
  color: #fb4560;
  opacity: 1;
  font-size: 12px;
  margin-bottom: 0.35rem;
`

const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
`
const FlexColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: flex-end;
  min-width: 30%;
  border-right: 1px solid #ffffff29;
  padding-right: 1rem;
`
const FlexColumnMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  min-width: 30%;
  padding: 0rem 1rem;
`
const FlexColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  min-width: 30%;
  border-left: 1px solid #ffffff29;
  max-height: 300px;
  overflow: scroll;
  position: relative;
  padding-left: 1rem;
  :-webkit-scrollbar {
    background-color: white;
  }
`

export default function LoaderExample({ quantityLoaders, setQuantityLoaders }) {
  const [render, startRender] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [ease, setEase] = React.useState("anticipate")
  const [rotation, setRotation] = React.useState(45)
  const [focus, setFocus] = React.useState("")

  React.useEffect(() => {
    console.log(quantityLoaders)
    if (quantityLoaders > 10) {
      setQuantityLoaders(10)
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }, [quantityLoaders])

  const labelVariants = {
    show: {
      display: "inline-block",
      y: "0px",
      color: "white",
      opacity: "0.6",
    },
    hide: {
      display: "none",
      y: "5px",
      color: "white",
      opacity: "0.6",
    },
    focus: {
      color: "#eb7084",
      opacity: 1,
    },
  }

  return (
    <DemoLoaders>
      <FlexColumnLeft>
        <LabelWrap>
          <Label
            variants={labelVariants}
            animate={focus === "quantity" ? "focus" : error ? "hide" : "show"}
            initial={"show"}
            transition={{ duration: "0.3" }}
          >
            Quantity
          </Label>
          <Notice
            variants={labelVariants}
            animate={focus === "quantity" ? "focus" : error ? "show" : "hide"}
            initial={"hide"}
            transition={{ duration: "0.3" }}
          >
            Max is 10
          </Notice>
          <Input
            quantityLoaders={quantityLoaders}
            value={quantityLoaders}
            onChange={setQuantityLoaders}
            onFocus={() => {
              setFocus("quantity")
            }}
            onBlur={() => {
              setFocus("")
            }}
          />
        </LabelWrap>
        <LabelWrap>
          <Label
            variants={labelVariants}
            animate={focus === "rotation" ? "focus" : error ? "hide" : "show"}
            initial={"show"}
            transition={{ duration: "0.3" }}
          >
            Rotation
          </Label>
          <Input
            id="rotation"
            value={rotation}
            onChange={setRotation}
            onFocus={() => {
              startRender(false)
              setFocus("rotation")
            }}
            onBlur={() => {
              startRender(true)
              setFocus("")
            }}
            onKeyPress={event => {
              event.key === "Enter"
                ? document.getElementById("rotation").blur()
                : undefined
            }}
          />
        </LabelWrap>

        <LabelWrap>
          <Label
            htmlFor="ease"
            variants={labelVariants}
            animate={focus === "ease" ? "focus" : error ? "hide" : "show"}
            initial={"show"}
            transition={{ duration: "0.3" }}
          >
            Easing
          </Label>
          <select
            id="ease"
            name="ease"
            onChange={e => setEase(e.target.value)}
            onFocus={() => {
              startRender(false)
              setFocus("ease")
            }}
            onBlur={() => {
              startRender(true)
              setFocus("")
            }}
            onKeyPress={event => {
              event.key === "Enter"
                ? document.getElementById("ease").blur()
                : undefined
            }}
          >
            <option value="anticipate">anticipate</option>
            <option value="linear">linear</option>
            <option value="easeIn">easeIn</option>
            <option value="easeOut">easeOut</option>
            <option value="easeInOut">easeInOut</option>
            <option value="circIn">circIn</option>
            <option value="circOut">circOut</option>
            <option value="circInOut">circInOut</option>
            <option value="backIn">backIn</option>
            <option value="backOut">backOut</option>
            <option value="backInOut">backInOut</option>
          </select>
        </LabelWrap>
      </FlexColumnLeft>
      <FlexColumnMiddle>
        {render == false ? (
          <p style={{ color: "white" }}>
            Hit <code>enter</code> (or click anywhere) to generate{" "}
          </p>
        ) : (
          <Loader
            ease={ease}
            rotation={rotation}
            setQuantityLoaders={setQuantityLoaders}
            quantityLoaders={quantityLoaders}
          />
        )}
      </FlexColumnMiddle>
      <FlexColumnRight id={"CodeColumn"}>
        <CodeBlock
          text={generateCodeSnippet({
            ease,
            rotation,
            quantityLoaders,
          })}
        />
      </FlexColumnRight>
    </DemoLoaders>
  )
}
