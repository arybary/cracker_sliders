import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import TestContent from "./components/TestContent";
import HomePage from "./page/home";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<TestContent />} />
        <Route path='/contacts' element={<TestContent />} />
        <Route path='/checkout' element={<TestContent />} />
        <Route path='/account' element={<TestContent />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
