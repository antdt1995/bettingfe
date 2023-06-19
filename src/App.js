import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import { Foodaholic } from "./components/pages/Foodaholics";
import Signin from "./components/signin";
import Signup from "./components/register";
import Odd from "./components/pages/Odd";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/navbar'
function App() {
  return (
    <>  
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/odds/*" element={<Odd />} />
        <Route path="/foodaholic" element={<Foodaholic />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
