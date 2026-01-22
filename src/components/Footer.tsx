import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom"; // Essential for the hidden admin link

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Residential Construction",
  "Commercial Construction",
  "Industrial Construction",
  "Civil Engineering",
  "Turnkey Projects",
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-steel text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Identity */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-amber rounded-lg flex items-center justify-center">
                <span className="font-display text-xl font-bold text-secondary-foreground">PC</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Pawar Constructions</h3>
                <p className="text-primary-foreground/60 text-sm">Engineers & Contractors</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Delivering precision-engineered infrastructure solutions with uncompromising quality, safety, and reliability.
              Professionally governed execution from concept to completion.
              Building enduring value since 1999.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-primary-foreground/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/70">
                  001, Shree Krupa Aprt, Ghansoli Sector 21 , Navi Mumbai - 400701
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/70">+91 9137222320</span>
                <span className="text-primary-foreground/70">+91 8454032249</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/70 text-sm">
                  mail@pawarconstructions.in
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Hidden Admin Entry */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            <Link to="/admin/login" className="hover:text-secondary transition-colors cursor-default">
              ©
            </Link>{" "}
            {new Date().getFullYear()} Pawar Constructions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};