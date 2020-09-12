import React from "react";

function Star({ classe, onClick }) {
  return (
    <span onClick={onClick} className={classe}>
      <i className="fa fa-heart"></i>
    </span>
  )
}

export default Star;