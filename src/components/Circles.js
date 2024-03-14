import { useState } from "react";

const CIRCLES = [
  {
    id: 1,
    color: "red"
  },
  {
    id: 2,
    color: "blue"
  },
  {
    id: 3,
    color: "brown"
  },
  {
    id: 4,
    color: "green"
  },
  {
    id: 5,
    color: "pink"
  }

];
const Circles = () => {
  const [activeStateId, setActiveStateId] = useState(CIRCLES);
  const [circles, setCircles] = useState(CIRCLES);
  const filtered = CIRCLES.filter(item => item.id > 1);

  const changeColor = id => {
    setCircles(prev => {
      console.log(circles);
      return prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            color: "white"
          };
        }

        return item;
      });
    });
  };

  return (
    <div className="circles-container">
      {circles.map(({ id, color }) =>
        <div
          key={id}
          className="circle"
          style={{ backgroundColor: activeStateId === id ? "grey" : color }}
          onClick={() => changeColor(id)}
        >{id}</div>)}
    </div>
  );
};


export default Circles;
