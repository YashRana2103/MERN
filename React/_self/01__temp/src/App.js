import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./HomePage";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
