import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
    <div className="container px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-xl font-display mb-4">GeoBukový</h3>
          <p className="text-primary-foreground/50 text-sm leading-relaxed">
            Ing. Tomáš Bukový, PhD. GEO2<br />
            Geodetická kancelária, inžiniering
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40 mb-4">Navigácia</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">Domov</Link>
            <Link to="/sluzby" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">Služby</Link>
            <Link to="/o-nas" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">O nás</Link>
            <Link to="/kontakt" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">Kontakt</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40 mb-4">Kontakt</h4>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <MapPin className="w-4 h-4 text-accent" /> Rabča 327
            </div>
            <a href="tel:+421948148341" className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors">
              <Phone className="w-4 h-4 text-accent" /> 0948 148 341
            </a>
            <a href="mailto:geobukovy@gmail.com" className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors">
              <Mail className="w-4 h-4 text-accent" /> geobukovy@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/30 text-xs">
        © {new Date().getFullYear()} GeoBukový — Ing. Tomáš Bukový, PhD. GEO2. Všetky práva vyhradené.
      </div>
    </div>
  </footer>
);

export default Footer;
