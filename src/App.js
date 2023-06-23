import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

import NavScrollExample from "./components/navbar";
import Signin from './components/pages/Signin'
import Signup from "./components/pages/Register";
import Odd from "./components/pages/Odd";
import Cart from "./components/pages/Cart";
import Account from './components/pages/Account'
import AdminDashBoard from './components/pages/AdminDashBoard'
import Home from './components/pages/Home'
import Match from './components/pages/Match'

function App() {
  return (
    <>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matchs" element={<Match />} />
        <Route path="/odds/*" element={<Odd />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/accounts" element={<Account />} />
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
