import { useEffect, useState } from "react";

import "./App.css";
import Child1 from "./components/Child1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Child2 from "./components/Child2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Child1 />} />
        <Route path="/2" element={<Child2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
