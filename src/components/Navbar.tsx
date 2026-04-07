import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src={logo}
            alt="Geobukovy logo"
            className="w-11 h-11 rounded-xl shadow-md"
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div>
            <span className={`text-2xl font-display font-bold transition-colors ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
              Geobukovy
            </span>
            <span className={`block text-[10px] tracking-widest uppercase font-body transition-colors ${scrolled ? "text-muted-foreground" : "text-primary-foreground/60"}`}>
              Geodetická kancelária
            </span>
          </div>
        </Link>

        <div className="hidden md:flex gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                location.pathname === l.href
                  ? scrolled
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary-foreground/20 text-primary-foreground"
                  : scrolled
                  ? "text-foreground/70 hover:text-primary hover:bg-muted"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass mx-4 mb-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === l.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-primary hover:bg-muted"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
