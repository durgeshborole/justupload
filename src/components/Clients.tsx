import { motion } from "framer-motion";

const clients = [
  "Ajanta Auto",
  "KingFisher",
  "R.B. Sukhramani",
  "Wellfinish",
  "Shavo Norgren",
  "Hilda Automation",
  "Vikash Patil",
  "Vista Inn",
  "Envirochem Tech Solutions",
  "Parth Enterprises",
];

export const Clients = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Trusted By
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Our Valued <span className="text-gradient-amber">Clients</span>
          </h2>
        </motion.div>
      </div>

      {/* Scrolling Clients */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-8"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-4 bg-card rounded-xl shadow-construction hover:shadow-lg transition-shadow"
            >
              <span className="font-medium text-foreground whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
