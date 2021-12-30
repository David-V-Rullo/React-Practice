import React, { useState, useEffect } from "react";
import Practice from "./components/Practice";
import Context from "./components/Context";

export const ThemeContext = React.createContext()

// Hooks always called at the top level of the function

function App() {
  const [count, setCount] = useState(4);
  const [items, setItems] = useState([]);
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
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
    <div>
      <form>
        <input type="text" placeholder="Name.."/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <input type="SUBMIT" />
      </form>
    </div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrementCount}>-</button>
      {items.map((item) => {
        return <pre>{JSON.stringify(items)}</pre>;
      })}
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
      <Context />
      <Practice />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
