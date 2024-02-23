import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Singup from "./pages/Singup/Singup";
import Search from "./pages/Search/Search";
import Dashboard from "./pages/Dashboard/Dashboard";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Navbar opaque={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
