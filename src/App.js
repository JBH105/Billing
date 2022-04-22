import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Transaction from "./components/Transaction";
import Signin from "./pages/auth/Signin";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      {window.location.pathname !== "/signin" ? <Sidebar /> : null}{" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;