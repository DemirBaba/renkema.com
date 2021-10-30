// 📦 Packages
import React from "react"
import styled from "styled-components"

// 🌱 Components
// 🧰 Utils
// 🌀 Variants
// 💅🏽 Styled Components

const InputField = styled.input`
  background: #f9f9f9;
  width: 90px;
  padding: 5px;
  margin-bottom: 20px;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  color: #545454;
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  :focus {
    border: 1px solid #eb7085;
    outline: none;
    filter: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`

export default function Input(props) {
  const [focused, setFocused] = React.useState(false)

  const { onChange, value, id, ...other } = props

  const handleChange = React.useCallback(e => onChange(e.target.value), [
    onChange,
  ])

  // const handleFocus = () => setFocused(true)
  // const handleBlur = () => setTimeout(setFocused(false), 5000)

  return (
    <InputField
      type="number"
      id={id}
      value={value}
      onChange={handleChange}
      {...other}
    ></InputField>
  )
}
