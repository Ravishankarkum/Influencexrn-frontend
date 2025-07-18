import { Route, Routes } from "react-router-dom";
import Navbar from './component/navbar';
import ProtectedRoute from './component/protectedRoute';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/profile';

function App() {
  return (
    <Routes>
      {/* Public Routes (No Navbar) */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Routes with Navbar */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Dashboard />
            </>
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Profile />
            </>
          </ProtectedRoute>
        }
      />
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
    </Routes>
  );
}

export default App;
