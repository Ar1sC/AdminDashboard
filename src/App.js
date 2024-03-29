import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import Lists from "./pages/list/List.jsx"
import Single from "./pages/single/Single.jsx"
import New from "./pages/new/New.jsx"
import React from "react"
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="users">
            <Route index element={<Lists/>} />
            <Route path=":userID" element={<Single/>} />
            <Route path="new" element={<New/>} />
          </Route>
          <Route path="products">
            <Route index element={<Lists/>} />
            <Route path=":productID" element={<Single/>} />
            <Route path="new" element={<New/>} />
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
