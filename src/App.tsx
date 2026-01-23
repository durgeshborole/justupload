import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// ===== Public Components (NAMED IMPORTS) =====
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ProjectGallery } from "./components/ProjectGallery";
import { Team } from "./components/Team";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { Priorities } from "./components/Priorities";
import { OrganizationChart } from "./components/OrganizationChart";



// ===== Admin Pages =====
import { AdminLogin } from "./pages/admin/Login";
import { AdminDashboard } from "./pages/admin/Dashboard";
import { ProtectedAdminRoute } from "./routes/ProtectedAdminRoute";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Priorities />
      <OrganizationChart />
      <Services />
      <ProjectGallery />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Website */}
          <Route path="/" element={<HomePage />} />

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
