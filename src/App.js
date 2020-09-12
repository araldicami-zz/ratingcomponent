import React, { useState } from "react";
import "./App.css";
import Star from "./components/Star";

const grade = [1, 2, 3, 4, 5];

function App() {
  const [selected, setSelected] = useState(0);

  const select = (item) => {
    if (item === 1 && selected === 1) {
      return setSelected(0);
    }

    return setSelected(item);
  };

  return (
    <div className="main">
      <span className="title">How do you love it?</span>
      <div className="rating">
        {grade.map((item) => (
          <Star
            onClick={() => select(item)}
            key={item}
            classe={selected >= item ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
