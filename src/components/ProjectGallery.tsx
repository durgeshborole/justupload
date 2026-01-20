// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";

// export const ProjectGallery = () => {
//   const [projects, setProjects] = useState<any[]>([]);

//   useEffect(() => {
//     supabase
//       .from("projects")
//       .select("*")
//       .order("created_at", { ascending: false })
//       .then(({ data }) => setProjects(data || []));
//   }, []);

//   return (
//     <section>
//       {projects.map(project => (
//         <div key={project.id}>
//           <img src={project.image_url} alt={project.title} />
//           <h3>{project.title}</h3>
//           <p>{project.description}</p>
//         </div>
//       ))}
//     </section>
//   );
// };


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Building2, Ruler } from "lucide-react";

// Import project images
import axiomgas from "@/assets/projects/axiomgas.jpeg";
import envirochem from "@/assets/projects/envirochem.jpg";
import adityaEngineering from "@/assets/projects/aditya-engineering.jpg";
import shavoNorgren from "@/assets/projects/shavo-norgren.jpg";
import wellFinish from "@/assets/projects/well-finish.jpg";
import parthEnterprises from "@/assets/projects/parth-enterprises.jpg";
import vistaInn from "@/assets/projects/vista-inn.jpg";
import hildaAutomation from "@/assets/projects/hilda-automation.jpg";
import vikasPatil from "@/assets/projects/vikas-patil.jpg";
import rbSukhramani from "@/assets/projects/rb-sukhramani.jpg";

const projects = [
  {
    id: 1,
    name: "Axiom Gas",
    location: "Plot no: C-541, Pavne MIDC",
    type: "Data Centre",
    area: "9,146 Sqft",
    architect: "",
    consultant: "Monika suryavanshi",
    image: axiomgas,
    status: "Ongoing",
  },
  {
    id: 2,
    name: "Envirochem Tech Solutions",
    location: "R-854, Rabale MIDC",
    type: "Data Centre",
    area: "2,00,000 Sqft",
    architect: "Amol Velankar",
    consultant: "Chopdekar",
    image: envirochem,
    status: "Ongoing",
  },
  {
    id: 3,
    name: "Aditya Engineering",
    location: "R-362, Rabale",
    type: "Factory Building",
    area: "30,000 Sqft",
    architect: "Nalavade",
    image: adityaEngineering,
    status: "Ongoing",
  },
  {
    id: 4,
    name: "Shavo Norgren",
    location: "R-524/525, Rabale MIDC",
    type: "Factory RCC",
    area: "70,000 Sqft",
    architect: "Mr. Sybill",
    image: shavoNorgren,
    status: "Completed",
  },
  {
    id: 5,
    name: "Well Finish",
    location: "R-975, Rabale",
    type: "Factory Building",
    area: "10,760 Sqft",
    architect: "Mr. Borgaonkar",
    image: wellFinish,
    status: "Completed",
  },
  {
    id: 6,
    name: "Parth Enterprises",
    location: "R-916 Rabale MIDC",
    type: "Factory Building",
    area: "16,000 Sqft",
    architect: "Mr. Nalavade",
    image: parthEnterprises,
    status: "Completed",
  },
  {
    id: 7,
    name: "Vista Inn",
    location: "Rabale MIDC",
    type: "Hotel",
    area: "7,000 Sqft",
    architect: "Mr. Jirge",
    image: vistaInn,
    status: "Completed",
  },
  {
    id: 8,
    name: "Hilda Automation",
    location: "R-810/01, Rabale",
    type: "Wall Construction",
    area: "20,000 Sqft",
    architect: "Mr. Suchit Gadakari",
    image: hildaAutomation,
    status: "Completed",
  },
  {
    id: 9,
    name: "Vikas Patil Hotel",
    location: "K-27, Airoli",
    type: "Hotel",
    area: "24,000 Sqft",
    architect: "Snehal Patil",
    image: vikasPatil,
    status: "Completed",
  },
  {
    id: 10,
    name: "R.B. Sukhramani",
    location: "R-812, Rabale",
    type: "Factory Building",
    area: "40,760 Sqft",
    architect: "Siddakala Associate",
    image: rbSukhramani,
    status: "Completed",
  },
];

export const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.status.toLowerCase() === filter);

  const openLightbox = (project: typeof projects[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const navigateProject = (direction: "prev" | "next") => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const newIndex = direction === "prev"
      ? (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
      : (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[newIndex]);
  };

  return (
    <section id="projects" className="py-28 scroll-mt-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Featured <span className="text-gradient-amber">Projects</span>
          </h2>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground/80 mb-6">
            Projects of the Last Five Years
          </h3>
          <p className="text-muted-foreground text-lg">
            Explore our diverse portfolio of completed and ongoing construction projects
            across residential, commercial, and industrial sectors.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {["all", "completed", "ongoing"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${filter === status
                  ? "bg-secondary text-secondary-foreground shadow-amber-glow"
                  : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(project)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-construction">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Status Badge */}
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${project.status === "Ongoing"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-card text-foreground"
                    }`}>
                    {project.status}
                  </span>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium">
                      View Details
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-primary/50 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateProject("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/50 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateProject("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/50 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                  <span className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold ${selectedProject.status === "Ongoing"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-card text-foreground"
                    }`}>
                    {selectedProject.status}
                  </span>
                </div>

                {/* Details */}
                <div className="p-8">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {selectedProject.name}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium text-foreground">{selectedProject.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Project Type</p>
                        <p className="font-medium text-foreground">{selectedProject.type}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Ruler className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Construction Area</p>
                        <p className="font-medium text-foreground">{selectedProject.area}</p>
                      </div>
                    </div>
                  </div>
                  {selectedProject.architect && (
                    <div className="mt-8 pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-1">Architect</p>
                      <p className="font-medium text-foreground">
                        {selectedProject.architect}
                      </p>
                    </div>
                  )}

                  {selectedProject.consultant && (
                    <div className="mt-8 pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-1">Consultant</p>
                      <p className="font-medium text-foreground">
                        {selectedProject.consultant}
                      </p>
                    </div>
                  )}


                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};