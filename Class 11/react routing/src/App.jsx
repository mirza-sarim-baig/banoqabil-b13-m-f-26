import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./home";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import Header from "./Header";
import Students from "./Students";
import Admins from "./Admins";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="students" element={<Students />} />
          <Route path="admins" element={<Admins />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<Aboutus />} />
      </Routes>
    </>
  );
}

export default App;
