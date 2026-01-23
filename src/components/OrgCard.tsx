import { motion } from "framer-motion";

export const OrgCard = ({
  title,
  subtitle,
  color = "bg-secondary",
}: {
  title: string;
  subtitle?: string;
  color?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`relative z-10 rounded-xl px-6 py-4 text-center shadow-construction text-white ${color}`}
    >
      {subtitle && (
        <p className="text-xs uppercase tracking-wide opacity-80">
          {subtitle}
        </p>
      )}
      <h4 className="font-display text-lg font-bold mt-1">{title}</h4>
    </motion.div>
  );
};
