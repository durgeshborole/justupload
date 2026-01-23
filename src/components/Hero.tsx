import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBuilding from "@/assets/hero-building.jpg";

const stats = [
  { icon: Building2, value: "150+", label: "Projects Completed" },
  { icon: Users, value: "130+", label: "Trusted Clients" },
  { icon: Award, value: "500+", label: "Skilled Workforce" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBuilding}
          alt="Modern building construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          {/* ✅ NEW LINE ADDED HERE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-secondary uppercase tracking-[0.2em] text-base font-medium mb-3"


          >
            Welcome to Pawar Constructions
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm text-secondary rounded-full text-sm font-medium mb-6">
              Trusted Since 1999
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Building Tomorrow's{" "}
            <span className="text-gradient-amber">Infrastructure</span> Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl"
          >
            Transforming blueprints into reality with innovation, engineering excellence,
            and unmatched workmanship. Your trusted partner in civil construction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects">
              <Button variant="secondary" size="lg" className="gap-2 shadow-amber-glow">
                View Our Projects
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="hero" size="lg">
                Get a Quote
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl"
            >
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-secondary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
