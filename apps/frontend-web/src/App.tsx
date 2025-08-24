// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Layout from "./components/furniture/Layout";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => (
  <Router>
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Layout>
    </AuthProvider>
  </Router>
);

export default App;
