// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AgentPage from "./pages/AgentPage/AgentPage";
import ManagerPage from "./pages/ManagerPage/ManagerPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import useAuth from "./hooks/useAuth";

function App() {
  const [user,token] =useAuth()
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage/>
            </PrivateRoute>
          }
        />
        {/* {if 
          user.is_manager = False
          <Route
          path="/agent"
          element={
            <PrivateRoute>
              <AgentPage/>
            </PrivateRoute>            
          }  />
        else 
          <Route
          path="/manager"
          element={
            <PrivateRoute>
              <ManagerPage/>
            </PrivateRoute>
          }
          />          
        } */}
        {/* <Route
          path="/"
          element={
            <PrivateRoute> */}
              {/* boolean            True            False*/}
              {/* {user.is_manager ? <ManagerPage/> : <AgentPage/>}
            </PrivateRoute>
          }
        /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />   
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
