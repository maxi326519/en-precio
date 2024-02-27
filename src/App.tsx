import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Singup from "./pages/Singup/Singup";
import Dashboard from "./pages/Dashboard/Dashboard";
import SearchList from "./pages/Search/SearchList/SearchList";
import SearchMaps from "./pages/Search/SearchMaps/SearchMaps";

import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/search" element={<SearchList />} />
        <Route path="/search-maps" element={<SearchMaps/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
