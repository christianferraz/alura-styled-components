import React from "react"
import styled from "styled-components"

const ItemComponent = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
  }
`

const Item = ({ type, from, value }) => {
  return (
    <ItemComponent>
      <span className="text">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </ItemComponent>
  )
}

export default Item
