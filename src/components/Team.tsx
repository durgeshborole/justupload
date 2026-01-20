import { motion } from "framer-motion";
// import anil from "@/assets/team/anil-pawar.jpeg";
// import pratik from "@/assets/team/pratik-pawar.jpg";
import simab from "@/assets/team/simab-borkar.jpeg";
import vishal from "@/assets/team/vishal-patil.jpeg";
import anil from "@/assets/team/pawar.jpeg";
import pratik from "@/assets/team/pratik.jpeg";

const technicalStaff = [
  { position: "Project Co-ordinator", count: 4, qualification: "B.E. Civil", experience: "18-23 Years Industrial" },
  { position: "Project Manager", count: 3, qualification: "B.E. Civil / DCE Civil", experience: "12-15 Years Industrial" },
  { position: "Sr. Site Engineer", count: 4, qualification: "B.E. Civil / DCE", experience: "10-12 Years Industrial" },
  { position: "Assistant Engineer", count: 4, qualification: "B.E. Civil / DCE", experience: "08-10 Years Industrial" },
  { position: "Site Supervisor", count: 4, qualification: "Graduate", experience: "15-20 Years Industrial" },
  { position: "QA / QC Engineer", count: 3, qualification: "B.E. Civil / DCE", experience: "12-15 Years Industrial" },
  { position: "Safety Manager / Officer", count: 4, qualification: "Safety Course / Safety Graduate", experience: "10-15 Years Industrial" },
  { position: "BIM Engineer", count: 1, qualification: "B.E. Civil / B.Arch", experience: "5-8 Years Industrial" },
];

const administrativeStaff = [
  { position: "Accountants", count: 2, qualification: "C.A. / B.Com", experience: "12-15 Years Industrial" },
  { position: "Purchase / Store", count: 10, qualification: "Technical / Any Graduation", experience: "12-15 Years Industrial" },
];

const leadership = [
  { name: "Anil Shrimant Pawar", role: "Founder", initial: "ASP",image : anil },
  { name: "Pratik Pawar", role: "Director", initial: "PP",image : pratik },

  { name: "Simab Borkar", role: "Chief Operating Officer", initial: "SB",image : simab },
  { name: "Vishal Patil", role: "Senior Engineer", initial: "VP",image : vishal },
];

export const Team = () => {
  return (
    <section id="team" className="py-28 scroll-mt-28">
      <div className="container mx-auto px-4">
        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Meet Our <span className="text-gradient-amber">Leadership</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A team of experienced professionals dedicated to delivering excellence in
            every project we undertake.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-20"
        >
          {leadership.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-construction border-4 border-background group-hover:scale-105 transition-transform duration-300 bg-muted flex items-center justify-center">

                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-3xl font-bold text-primary-foreground">
                      {member.initial}
                    </span>
                  )}
                </div>

                {/* Accent Line */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-secondary rounded-full" />
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-secondary font-medium text-sm">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Manpower Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Manpower <span className="text-gradient-amber">Resources</span>
          </h2>
        </motion.div>

        {/* Technical Staff Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="overflow-x-auto rounded-xl shadow-construction">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary text-secondary-foreground">
                  <th className="px-6 py-4 text-left font-semibold uppercase text-sm tracking-wider">
                    Technical Staff
                  </th>
                  <th className="px-6 py-4 text-center font-semibold uppercase text-sm tracking-wider">
                    Number of Staff
                  </th>
                  <th className="px-6 py-4 text-left font-semibold uppercase text-sm tracking-wider">
                    Qualification
                  </th>
                  <th className="px-6 py-4 text-left font-semibold uppercase text-sm tracking-wider">
                    Experience
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {technicalStaff.map((staff, index) => (
                  <tr
                    key={index}
                    className={`border-b border-border ${index % 2 === 0 ? "bg-card" : "bg-muted/50"
                      }`}
                  >
                    <td className="px-6 py-4 font-medium text-foreground">
                      {staff.position}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-secondary">
                      {String(staff.count).padStart(2, "0")}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {staff.qualification}
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      {staff.experience}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Administrative Staff Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-x-auto rounded-xl shadow-construction">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left font-semibold uppercase text-sm tracking-wider">
                    Administrative Staff
                  </th>
                  <th className="px-6 py-4 text-center font-semibold uppercase text-sm tracking-wider">
                    Number of Staff
                  </th>
                  <th className="px-6 py-4 text-left font-semibold uppercase text-sm tracking-wider">
                    Qualification
                  </th>
                  <th className="px-6 py-4 text-left font-semibold uppercase text-sm tracking-wider">
                    Experience
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {administrativeStaff.map((staff, index) => (
                  <tr
                    key={index}
                    className={`border-b border-border ${index % 2 === 0 ? "bg-card" : "bg-muted/50"
                      }`}
                  >
                    <td className="px-6 py-4 font-medium text-foreground">
                      {staff.position}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-secondary">
                      {String(staff.count).padStart(2, "0")}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {staff.qualification}
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      {staff.experience}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
