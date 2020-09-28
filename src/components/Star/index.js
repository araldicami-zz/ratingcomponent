import React from "react";

function Star({ classe, onClick, onHover, onRemoveHover }) {
  return (
    <span onMouseOver={onHover} onMouseLeave={onRemoveHover} onClick={onClick} className={classe}>
      <i className="fa fa-heart"></i>
    </span>
  )
}

export default Star;