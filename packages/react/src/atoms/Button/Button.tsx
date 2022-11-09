import React from 'react'

interface Props {
  label: string;
}

const Button = ({label}: Props) => {
  return (
    <button className="dse-button-container">{label}</button>
  )
}

export default Button