import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Components
import Home from "./components/Home";
import Books from "./components/Books";


function App() {
  useEffect(() => {
    document.title = "Online Test - Frontend Engineer ";
  });

  return (
    <div className="">
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
