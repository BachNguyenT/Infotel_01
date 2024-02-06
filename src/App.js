import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useHistory,
} from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login.js";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              window.location.pathname === "/" ? (
                <Navigate to="/login" replace />
              ) : (
                <Dashboard />
              )
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <div>
        <Dashboard />
      </div> */}
    </div>
  );
};
export default App;
