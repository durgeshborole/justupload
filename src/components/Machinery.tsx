import { motion } from "framer-motion";
import { Wrench, Box, Cog, Truck } from "lucide-react";

const machinery = [
  { icon: Wrench, name: "Props", quantity: "20,000+" },
  { icon: Box, name: "Shuttering Materials", quantity: "5,000 Brass" },
  { icon: Cog, name: "Concrete Mixers", quantity: "15 Units" },
  { icon: Cog, name: "Diesel Mixers", quantity: "5 Units" },
  { icon: Truck, name: "Vibrators", quantity: "20 Units" },
  { icon: Cog, name: "Vibratory Compactors", quantity: "10 Units" },
  { icon: Wrench, name: "Steel Bending Machines", quantity: "10 Units" },
  { icon: Truck, name: "Concrete Lift Machines", quantity: "7 Units" },
];

export const Machinery = () => {
  return (
    <section className="py-24 bg-gradient-steel text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Our Equipment
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Machinery <span className="text-gradient-amber">Inventory</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            State-of-the-art equipment to handle projects of any scale with efficiency
            and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {machinery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-primary-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/10 hover:border-secondary/50 transition-colors text-center"
            >
              <item.icon className="w-8 h-8 mx-auto mb-4 text-secondary" />
              <p className="text-2xl font-bold mb-1">{item.quantity}</p>
              <p className="text-primary-foreground/60 text-sm">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
