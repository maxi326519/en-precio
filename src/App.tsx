import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Singup from "./pages/Singup/Singup";
import Dashboard from "./pages/Dashboard/Dashboard";
import SearchList from "./pages/Search/SearchList/SearchList";
import SearchMaps from "./pages/Search/SearchMaps/SearchMaps";
import SearchDetails from "./pages/Search/SearchDetails/SearchDetails";
import CompanyProfile from "./pages/CompanyProfile/CompanyProfile";
import ContactForm from "./pages/ContactForm/ContactForm";
import AboutUs from "./pages/AboutUs/AboutUs";
import Profile from "./pages/Profile/Profile";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Tasador from "./pages/Tasador/Tasador";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/search" element={<SearchList />} />
        <Route path="/search/:id" element={<SearchDetails />} />
        <Route path="/search-maps" element={<SearchMaps />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<ContactForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/realState" element={<CompanyProfile />} />
        <Route path="/tasador" element={<Tasador />} />
      </Routes>
    </div>
  );
}

export default App;
