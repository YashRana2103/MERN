import React from "react";
import { useTheme } from "./contexts/ThemeContext";

function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
}

export default HomePage;
