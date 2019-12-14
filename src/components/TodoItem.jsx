import React, { useState } from "react";

function TodoItem(props) {
  const [crossedOut, setCross] = useState(false);

  function handleCrossOut(event) {
    console.log(event.target);
    crossedOut ? setCross(false) : setCross(true);
  }

  return (
    <div
      onClick={handleCrossOut}
      style={
        crossedOut
          ? { textDecoration: "line-through" }
          : { textDecoration: null }
      }
    >
      <li>{props.todoItem}</li>
    </div>
  );
}

export default TodoItem;
