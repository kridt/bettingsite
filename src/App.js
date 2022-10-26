import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/PrivateRoute";
import { auth } from "./firebase";
import Dashboard from "./pages/Dashboard";
import LogInSite from "./pages/LogInSite";
import SignUp from "./pages/SignUp";
import Startside from "./pages/Startside";

function App() {
  console.log(auth.currentUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Startside />} />
          <Route path="/login" element={<LogInSite />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
