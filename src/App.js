import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import Lists from "./pages/list/List.jsx"
import Single from "./pages/single/Single.jsx"
import New from "./pages/new/New.jsx"
import React, { useContext, useState } from "react"
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource.js"
import "./style/dark.scss"
import { DarkModeContext } from "./context/darkModeContext.js"


function App() {

  const{darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<Lists/>} />
            <Route path=":userID" element={<Single/>} />
            <Route path="new" element={<New inputs = {userInputs} title="Add New User"/>} />
          </Route>
          <Route path="products">
            <Route index element={<Lists/>} />
            <Route path=":productID" element={<Single/>} />
            <Route path="new" element={<New inputs = {productInputs} title="Add New Product"/>} />
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
