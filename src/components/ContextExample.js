import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

export default function App() {
  const Theme = { theme: "dark", textColor: "white", backgroundColor: "black" };
  return (
    <ThemeContext.Provider value={Theme}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  return <Button />
}

function Button() {
  const context = useContext(ThemeContext);
  return (
    <button style={{ color: context.textColor, backgroundColor: context.backgroundColor }}>
      {context.theme}
    </button>
  )
}
