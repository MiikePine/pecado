import React, { useState } from "react";
import Button from "./components/Button";
import Search from "./components/Search";
import Form from "./components/Form";
import Input from "./components/Input";
import ForgotPw from "./Pages/ForgotPw"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import Settings from "./Pages/Settings";
import Logout from "./Pages/Logout";
import Bill from "./Pages/Bill";
import Members from "./Pages/Members";
import Menu from "./components/Menu";
import Header from "./components/Header"
import Layout from "./components/Layout";
import Filter from "./components/Filter";
import MenuMobile from "./components/MenuMobile";
import Register from  "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/ForgotPw" element={<ForgotPw />} />
        <Route path="*" element={< Error />} /> 
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Logout" element={<Logout/>} />
        <Route path="/Bill" element={<Bill />} />
        <Route path="/Members" element={<Members/>} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Layout" element={<Layout />} />
        <Route path="/Filter" element={<Filter />} />
        <Route path="/MenuMobile" element={<MenuMobile />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <ToastContainer autoClose={2000}/>
    </BrowserRouter>
  );
}

export default App


