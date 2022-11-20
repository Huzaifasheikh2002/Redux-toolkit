import logo from "./logo.svg";
import "./App.css";
import { Typography } from "@mui/material";
import AppBarCmp from "./Components/MuiComponents/AppBarCmp";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
// import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import About from "./Pages/About";

function App() {  
  return (
    <>
      <AppBarCmp />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />

     <Route element={<ProtectedRoute/>}>
        <Route path="/home" element={<Home />} />
      </Route>

        <Route path="/" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
