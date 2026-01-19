// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";

// export const Services = () => {
//   const [services, setServices] = useState<any[]>([]);

//   useEffect(() => {
//     supabase
//       .from("services")
//       .select("*")
//       .then(({ data }) => {
//         setServices(data || []);
//       });
//   }, []);

//   return (
//     <section>
//       {services.map(service => (
//         <div key={service.id}>
//           <h3>{service.title}</h3>
//           <p>{service.description}</p>
//         </div>
//       ))}
//     </section>
//   );
// };


import { motion } from "framer-motion";
import { Home, Building, Factory, Hammer, Settings, HardHat } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "Building dream homes with attention to detail, modern designs, and quality craftsmanship that stands the test of time.",
  },
  {
    icon: Building,
    title: "Commercial Construction",
    description:
      "Creating functional commercial spaces including offices, retail outlets, and multi-story buildings with modern amenities.",
  },
  {
    icon: Factory,
    title: "Industrial Construction",
    description:
      "Specialized in factory buildings, warehouses, and industrial facilities with focus on durability and efficiency.",
  },
  {
    icon: Hammer,
    title: "Civil & Structural Engineering",
    description:
      "Expert structural analysis and civil engineering solutions ensuring safety and compliance with all regulations.",
  },
  {
    icon: Settings,
    title: "Turnkey Projects",
    description:
      "End-to-end project management from conceptualization to completion, handling every aspect of construction.",
  },
  {
    icon: HardHat,
    title: "Project Consultation",
    description:
      "Professional consultation services for planning, budgeting, and execution of construction projects of any scale.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Comprehensive Construction{" "}
            <span className="text-gradient-amber">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From residential homes to large-scale industrial projects, we offer a full
            spectrum of construction services tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card p-8 rounded-2xl shadow-construction hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-amber rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};