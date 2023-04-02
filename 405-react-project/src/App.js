import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./components/Home.jsx";
import Menu from "./components/Menu.jsx";
const t = 5 > 4 ? "/Menu" : "/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Login" element={<Login />} /> */}
      <Route path="/Menu" element={<Menu />} />
      {/* <Route path="/Register" element={<Register />} /> */}
    </Routes>
  );
}

export default App;
