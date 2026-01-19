import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  "High-quality infrastructure and turnkey solutions",
  "Safety, precision & timely delivery",
  "Sustainable construction practices",
  "Innovation & engineering excellence",
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-construction">
              <img
                src={aboutTeam}
                alt="Pawar Constructions team at work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-construction max-w-xs">
              <p className="font-display text-3xl font-bold text-secondary">15+</p>
              <p className="text-muted-foreground">Years of Excellence in Construction</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Building Trust Through{" "}
              <span className="text-gradient-amber">Quality Construction</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Pawar Constructions is a professionally governed civil engineering and construction organization, established in 1999, delivering high-performance infrastructure solutions with precision, reliability, and long-term value. With over two decades of industry experience, our operations are built on a strong foundation of engineering discipline, quality control, and systematic project execution.

              We specialize in transforming technically complex designs into structurally sound, durable, and future-ready developments. Through rigorous planning, modern construction methodologies, and strict adherence to safety protocols, we ensure consistency and excellence across every stage of project delivery.

              Our commitment to quality is reinforced by ISO 9001 certification and International Accreditation Forum (IAF) accreditation, reflecting compliance with globally recognized quality management systems. These standards guide our processes, strengthen accountability, and ensure measurable performance outcomes across all projects.

              Driven by integrity, technical competence, and professional governance, Pawar Constructions partners with clients to deliver infrastructure that meets the highest expectations of performance, safety, and durability—today and for generations to come.
            </p>

            <ul className="space-y-4 mb-10">
              {values.map((value, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </li>
              ))}
            </ul>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-muted rounded-xl">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-sm">
                  To deliver value-driven construction services with integrity and the
                  highest standards in quality, safety, and project delivery.
                </p>
              </div>

              <div className="p-6 bg-muted rounded-xl">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-sm">
                  To be recognized as a leading construction company known for quality,
                  reliability, and commitment to excellence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
