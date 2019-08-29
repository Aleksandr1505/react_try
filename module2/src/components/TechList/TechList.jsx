import React from "react";
import {StyledList, StyledItem} from './TechStyledList.js'
const TechList = ({ items, color }) => (
  <StyledList bgColor={color}>
    {items.map(item => (
      <StyledItem Color="green" key={item.id}>
        <span>{item.name}</span>
      </StyledItem>
    ))}
  </StyledList>
);

export default TechList;