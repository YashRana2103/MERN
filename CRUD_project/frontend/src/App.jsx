import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#90C3C8]">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateUser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
