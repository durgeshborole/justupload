import { motion } from "framer-motion";
import { ShieldCheck, ClipboardCheck } from "lucide-react";

const compliances = [
  "ISO 9001:2015 Certified Company",
  "GST Registered (Maharashtra & Karnataka)",
  "VAT / CST Registration (Maharashtra & Karnataka)",
  "Service Tax Registered",
  "Provident Fund (PF) Compliant",
  "ESIC Scheme Registered",
  "Maharashtra Labour Welfare Board (MLWB)",
  "Professional Tax (PT) Registered",
  "Workmen’s Compensation Insurance",
];

export const Priorities = () => {
  return (
    <section id="priorities" className="py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Our Commitment
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Our <span className="text-gradient-amber">Priorities & Principles</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Safety, compliance, and responsibility form the foundation of every project
            we deliver at Pawar Constructions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Safety Policy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-construction"
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-secondary" />
            </div>

            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Safety, Health & Environment Policy
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Pawar Constructions is committed to implementing a structured Safety,
              Health, and Environment (SHE) policy across all operations.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>• Continuous safety education and workforce training</li>
              <li>• Safe work methods and process standardization</li>
              <li>• Mandatory use of Personal Protective Equipment (PPE)</li>
              <li>• Identification and rectification of unsafe acts</li>
              <li>• Periodic audits and safety awareness programs</li>
            </ul>
          </motion.div>

          {/* Compliance */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-construction"
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <ClipboardCheck className="w-7 h-7 text-secondary" />
            </div>

            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Compliance & Statutory Registrations
            </h3>

            <ul className="grid sm:grid-cols-2 gap-3">
              {compliances.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <span className="text-secondary mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
