import { useState } from "react";
import { supabase } from "@/lib/supabase";

// Section components
import { HeroAdmin } from "./sections/HeroAdmin";
import { AboutAdmin } from "./sections/AboutAdmin";
import { ServicesAdmin } from "./sections/ServicesAdmin";
import { ProjectsAdmin } from "./sections/ProjectsAdmin";
import { TeamAdmin } from "./sections/TeamAdmin";
import { ClientsAdmin } from "./sections/ClientsAdmin";
import { ContactAdmin } from "./sections/ContactAdmin";

export const AdminDashboard = () => {
  const sections = [
    "Hero",
    "About",
    "Services",
    "Projects",
    "Team",
    "Clients",
    "Contact",
  ];

  const [active, setActive] = useState("Hero");

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        {sections.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={`block w-full text-left px-3 py-2 rounded mb-2 ${
              active === s ? "bg-gray-800" : "hover:bg-gray-700"
            }`}
          >
            {s}
          </button>
        ))}

        <button
          onClick={logout}
          className="mt-6 w-full bg-red-500 px-3 py-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {active === "Hero" && <HeroAdmin />}
        {active === "About" && <AboutAdmin />}
        {active === "Services" && <ServicesAdmin />}
        {active === "Projects" && <ProjectsAdmin />}
        {active === "Team" && <TeamAdmin />}
        {active === "Clients" && <ClientsAdmin />}
        {active === "Contact" && <ContactAdmin />}
      </main>
    </div>
  );
};
