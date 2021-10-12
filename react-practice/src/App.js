import React, { useState, useEffect } from "react";

// Hooks always called at the top level of the function

function App() {
  const [count, setCount] = useState(4);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrementCount}>-</button>
      {items.map((item) => {
        return <pre>{JSON.stringify(items)}</pre>;
      })}
    </>
  );
}

export default App;
