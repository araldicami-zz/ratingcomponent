import React, { useState } from 'react';
import './index.scss';
import Star from './components/Star';

const grade = [1, 2, 3, 4, 5];

function App() {
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState(0);

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
            onHover={() => setHover(item)}
            onClick={() => select(item)}
            onRemoveHover={() => setHover(0)}
            key={item}
            classe={selected >= item ? "active" : "" || hover >= item ? "active-hover" : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
