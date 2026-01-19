// import { useState, useEffect } from "react";
// import { Menu, X, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion, AnimatePresence } from "framer-motion";
// import iso from "@/assets/certifications/ISO 9001.png";
// import iaf from "@/assets/certifications/IAF LOGO.png";


// const navLinks = [
//   { href: "#about", label: "About" },
//   { href: "#services", label: "Services" },
//   { href: "#projects", label: "Projects" },
//   { href: "#team", label: "Team" },
//   { href: "#contact", label: "Contact" },
// ];

// export const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header

//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
//           ? "bg-card/95 backdrop-blur-md shadow-construction py-3"
//           : "bg-transparent py-5"
//         }`}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         <a href="#" className="flex items-center gap-3">
//           <div className="w-12 h-12 bg-gradient-amber rounded-lg flex items-center justify-center">
//             <span className="font-display text-xl font-bold text-secondary-foreground">PC</span>
//           </div>
//           <div className="hidden sm:block">
//             <h1 className={`font-display text-xl font-bold transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
//               Pawar Constructions
//             </h1>
//             <p className={`text-xs transition-colors ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
//               Engineers & Contractors
//             </p>
//           </div>
//         </a>

//         {/* Certification Bar */}
//         <div className="w-full bg-gray-100 border-b">
//           <div className="max-w-7xl mx-auto flex justify-end items-center gap-4 px-4 py-2">
//             <img
//               src={iso}
//               alt="ISO 9001 Certified"
//               className="h-10 object-contain"
//             />
//             <img
//               src={iaf}
//               alt="IAF Accredited"
//               className="h-10 object-contain"
//             />
//           </div>
//         </div>


//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className={`font-medium transition-colors hover:text-secondary ${isScrolled ? "text-foreground" : "text-primary-foreground"
//                 }`}
//             >
//               {link.label}
//             </a>
//           ))}
//           <Button variant="secondary" size="sm" className="gap-2">
//             <Phone className="w-4 h-4" />
//             <span className="hidden xl:inline">+91 9137222320</span>
//             <span className="xl:hidden">Call</span>
//           </Button>
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"
//             }`}
//         >
//           {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-card border-t border-border"
//           >
//             <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="font-medium text-foreground hover:text-secondary py-2"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//               <Button variant="secondary" className="w-full gap-2 mt-2">
//                 <Phone className="w-4 h-4" />
//                 +91 9137222320
//               </Button>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };


import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import iso from "@/assets/certifications/ISO 9001.png";
import iaf from "@/assets/certifications/IAF LOGO.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-construction py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-amber rounded-lg flex items-center justify-center">
            <span className="font-display text-xl font-bold text-secondary-foreground">
              PC
            </span>
          </div>
          <div className="hidden sm:block">
            <h1
              className={`font-display text-xl font-bold transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Pawar Constructions
            </h1>
            <p
              className={`text-xs transition-colors ${
                isScrolled
                  ? "text-muted-foreground"
                  : "text-primary-foreground/70"
              }`}
            >
              Engineers & Contractors
            </p>
          </div>
        </a>

        {/* Desktop Navigation + Certifications */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors hover:text-secondary ${
                isScrolled
                  ? "text-foreground"
                  : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Certification Logos (NO BACKGROUND) */}
          <div className="flex items-center gap-3 ml-2">
            <img
              src={iso}
              alt="ISO 9001 Certified"
              className="h-8 object-contain"
            />
            <img
              src={iaf}
              alt="IAF Accredited"
              className="h-8 object-contain"
            />
          </div>

          {/* Call Button */}
          <Button variant="secondary" size="sm" className="gap-2 ml-2">
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">+91 9137222320</span>
            <span className="xl:hidden">Call</span>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-foreground hover:text-secondary py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="secondary" className="w-full gap-2 mt-2">
                <Phone className="w-4 h-4" />
                +91 9137222320
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
