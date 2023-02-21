// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
// import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AgentPage from "./pages/AgentPage/AgentPage";
import ManagerPage from "./pages/ManagerPage/ManagerPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import useAuth from "./hooks/useAuth";

function App() {
  const [user] =useAuth()
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
               {user?.is_manager ? <ManagerPage/> : <AgentPage/>}
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />   
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
