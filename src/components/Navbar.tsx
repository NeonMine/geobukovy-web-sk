import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { label: "Domov", href: "/" },
  { label: "Služby", href: "/sluzby" },
  { label: "O nás", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="GeoBukový" className="h-11 w-11 object-contain" />
          <div className="leading-tight">
            <div className="font-serif text-xl text-primary tracking-tight">
              GeoBukový
            </div>
            <div className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground mt-0.5">
              Geodézia · Kartografia
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const active = location.pathname === l.href;
            return (
              <Link
                key={l.href}
                to={l.href}
                className={`relative text-[13px] tracking-wide transition-colors ${
                  active ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent" />
                )}
              </Link>
            );
          })}
        </div>

        <a
          href="tel:+421948148341"
          className="hidden md:inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide">0948 148 341</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-primary"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container flex flex-col py-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-sm border-b border-border/60 ${
                    location.pathname === l.href ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:+421948148341"
                className="py-4 text-sm font-medium text-primary"
              >
                0948 148 341
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
