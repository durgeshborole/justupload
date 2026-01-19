import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  "High-quality infrastructure and turnkey solutions",
  "Strict safety standards, precision & timely delivery",
  "Sustainable and responsible construction practices",
  "Innovation-driven engineering excellence",
];

export const About = () => {
  return (
    <section id="about" className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-construction">
              <img
                src={aboutTeam}
                alt="Pawar Constructions team at work"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-card px-8 py-6 rounded-2xl shadow-construction">
              <p className="font-display text-4xl font-bold text-secondary">
                25+
              </p>
              <p className="text-muted-foreground text-sm tracking-wide">
                Years of Engineering Excellence
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Established in 1999
              </p>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
              About Us
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-8 leading-tight">
              Building Enduring Infrastructure Through{" "}
              <span className="text-gradient-amber">Engineering Excellence</span>
            </h2>

            {/* Split Content for Better Readability */}
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                Pawar Constructions is a professionally governed civil engineering and
                construction organization, established in 1999, delivering
                high-performance infrastructure solutions with precision, reliability,
                and long-term value. With over two decades of industry experience, our
                operations are founded on engineering discipline, structured quality
                control, and systematic project execution.
              </p>

              <p>
                We specialize in transforming technically complex designs into
                structurally sound, durable, and future-ready developments. Through
                rigorous planning, modern construction methodologies, and strict
                adherence to safety protocols, we ensure consistent excellence across
                every phase of project delivery.
              </p>

              <p>
                Our commitment to quality is reinforced by ISO 9001 certification and
                International Accreditation Forum (IAF) accreditation, reflecting
                compliance with globally recognized quality management systems that
                drive accountability, performance, and reliability.
              </p>
            </div>

            {/* Values */}
            <ul className="grid sm:grid-cols-2 gap-4 mb-12">
              {values.map((value, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-muted/50 p-4 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{value}</span>
                </li>
              ))}
            </ul>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-7 bg-muted rounded-2xl">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To deliver value-driven construction services through integrity,
                  technical excellence, and uncompromising standards in quality,
                  safety, and project delivery.
                </p>
              </div>

              <div className="p-7 bg-muted rounded-2xl">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To be recognized as a leading construction organization, known for
                  engineering excellence, reliability, and long-term value creation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
