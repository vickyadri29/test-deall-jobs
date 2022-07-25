import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Components
import Home from "./components/Home";
import DetailCategories from "./components/DetailCategories";
import DetailBooks from "./components/DetailBooks";
import Bookmarks from "./components/Bookmarks";

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
          <Route path="/detailcategories/:id" element={<DetailCategories/>}/>
          <Route path="/detailbooks/:id" element={<DetailBooks />}/>
          <Route path="/bookmarks" element={<Bookmarks />}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
